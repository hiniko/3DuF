var OrbitControls = require("./OrbitControls");
var STLExporter = require("./STLExporter");
var ThreeFeatures = require("./threeFeatures");
var Detector = require("./Detector");
var saveSTL = STLExporter.saveSTL;

class ThreeDeviceRenderer {
	constructor(renderContainer) {
		this.container = renderContainer;
		this.camera;
		this.controls;
		this.scene;
		this.renderer;
		this.backgroundColor = 0xEEEEEE;
		this.mockup = null;
		this.layers = null;
		this.json = null;
		this.initialY = 0;

		this.init();
		this.render();
	}

	init() {
		if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
		this.initCamera();
		this.initControls();
		this.initScene();
		this.initRenderer();
		let reference = this;
		window.addEventListener('resize', function() {
			reference.onWindowResize()
		}, false);
	}

	initCamera() {
		this.camera = new THREE.PerspectiveCamera(60, this.container.clientWidth / this.container.clientHeight, 1, 1000);
		this.camera.position.z = 100;
	}

	initControls() {
		this.controls = new THREE.OrbitControls(this.camera);
		this.controls.damping = 0.2;
		let reference = this;
		this.controls.addEventListener('change', function() {
			reference.render();
		});
	}

	initScene() {
		this.scene = null;
		this.scene = new THREE.Scene();
		//lights
		var light1 = new THREE.DirectionalLight(0xffffff);
		light1.position.set(1, 1, 1);
		this.scene.add(light1);

		var light2 = new THREE.DirectionalLight(0x002288);
		light2.position.set(-1, -1, -1);
		this.scene.add(light2);

		var light3 = new THREE.AmbientLight(0x222222);
		this.scene.add(light3);
	}

	initRenderer() {
		this.renderer = new THREE.WebGLRenderer({
			antialias: true
		});
		this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
		this.renderer.setClearColor(this.backgroundColor, 1);
		this.container.appendChild(this.renderer.domElement);
	}

	static sanitizeJSON(json) {
		ThreeDeviceRenderer.sanitizeParams(json.params);
		for (var i = 0; i < json.layers.length; i++) {
			ThreeDeviceRenderer.sanitizeParams(json.layers[i].params, json.params.height);
			for (var key in json.layers[i].features) {
				ThreeDeviceRenderer.sanitizeParams(json.layers[i].features[key].params, json.params.height);
			}
		}
	}

	static sanitizeParams(params, height) {
		for (var key in params) {
			if (key == "start" || key == "end" || key == "position") {
				var pos = params[key];
				params[key] = [pos[0] / 1000, height - (pos[1] / 1000)];
			} else {
				params[key] = params[key] / 1000;
			}
		}
	}

	onWindowResize() {
		this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
		this.render();
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}

	setupCamera(centerX, centerY, deviceHeight, pixelHeight, initialZoom) {
		this.controls.reset();
		this.camera.position.z = this.getCameraDistance(deviceHeight, pixelHeight);
		this.controls.panLeft(-centerX);
		this.controls.panUp(-centerY + deviceHeight);
		this.controls.update();
		this.initialY = this.camera.position.y;
		this.initialZoom = initialZoom;
	}

	getCameraCenterInMicrometers(){
		let position = this.camera.position;
		return [position.x * 1000, (this.camera.position.y - this.initialY) * 1000];
	}

	getZoom(){
		let height = this.json.params.height / 1000;
		let distance = this.camera.position.z;
		if (distance < 0){
			return this.initialZoom;
		}
		let pixels = this.computeHeightInPixels(height, distance);
		let zoom = pixels / this.json.params.height;
		console.log(zoom);
		return zoom;
	}

	getCameraDistance(objectHeight, pixelHeight) {
		console.log(pixelHeight);
		var vFOV = this.camera.fov * Math.PI / 180;
		var ratio = pixelHeight / this.container.clientHeight;
		var height = objectHeight / ratio;
		var distance = height / (2 * Math.tan(vFOV / 2));
		return distance;
	}

	computeHeightInPixels(objectHeight, distance) {
		var vFOV = this.camera.fov * Math.PI / 180; // 
		var height = 2 * Math.tan(vFOV / 2) * distance; // visible height
		var ratio = objectHeight / height;
		var pixels = this.container.clientHeight * ratio;
		return pixels;
	}

	loadDevice(renderedDevice) {
		this.initScene();
		this.scene.add(renderedDevice);
		this.render();
	}

	showMockup() {
		if (this.mockup) {
			this.loadDevice(this.mockup);
		}
	}

	showLayer(index) {
		if (this.layers) {
			this.loadDevice(this.layers[index]);
		}
	}

	loadJSON(json) {
		this.json = json;
		ThreeDeviceRenderer.sanitizeJSON(json);
		this.mockup = this.renderMockup(json);
		this.layers = this.renderLayers(json);
	}

	renderFeatures(layer, z_offset) {
		var renderedFeatures = new THREE.Group();
		for (var featureID in layer.features) {
			var feature = layer.features[featureID];
			renderedFeatures.add(ThreeFeatures.renderFeature(feature, layer, z_offset));
		}
		return renderedFeatures;
	}

	renderLayers(json) {
		var renderedLayers = [];
		for (var i = 0; i < json.layers.length; i++) {
			renderedLayers.push(this.renderLayer(json, i));
		}
		return renderedLayers;
	}

	renderLayer(json, layerIndex) {
		var width = json.params.width;
		var height = json.params.height;
		var layer = json.layers[layerIndex];
		var renderedFeatures = new THREE.Group();
		var renderedLayer = new THREE.Group();
		renderedFeatures.add(this.renderFeatures(layer, 0));
		if (layer.params.flip) {
			this.flipLayer(renderedFeatures, height, layer.params.z_offset);
		}
		renderedLayer.add(renderedFeatures);
		renderedLayer.add(ThreeFeatures.SlideHolder(width, height, true));
		return renderedLayer;
	}

	flipLayer(layer, height, z_offset) {
		layer.rotation.x += Math.PI;
		layer.position.y += height;
		layer.position.z += z_offset;
	}

	renderMockup(json) {
		var renderedMockup = new THREE.Group();
		var layers = json.layers;
		for (var i = 0; i < layers.length; i++) {
			var layer = layers[i];
			var renderedLayer = this.renderFeatures(layer, layer.params.z_offset);
			renderedMockup.add(renderedLayer);
		}
		var renderedHolder = ThreeFeatures.SlideHolder(json.params.width, json.params.height, true);
		renderedMockup.add(renderedHolder);
		return renderedMockup;
	}

	animate() {
		requestAnimationFrame(animate);
		this.controls.update();
	}
}

module.exports = ThreeDeviceRenderer;