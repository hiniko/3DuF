var Registry = require("../../core/registry");
var PaperPrimitives = require("../paperPrimitives");
var Port = require("../../core/features").Port;
var Colors = require("../colors");
var FeatureRenderer = require("./FeatureRenderer");

class PortRenderer extends FeatureRenderer {
    static renderFeature(port){
       let position = port.params.getValue("position");
        let radius;

        //TODO: figure out inheritance pattern for values!

        try {
            radius = port.params.getValue("radius1");
        } catch (err) {
            radius = Port.getDefaultValues()["radius1"];
        }

        let c1 = PaperPrimitives.Circle(position, radius);
        c1.fillColor = FeatureRenderer.getLayerColor(port, Port);
        c1.featureID = port.id;
        console.log("foo");
        return c1; 
    }

    static renderTarget(position){
        let width = Port.getDefaultValues()["radius1"];
        let circ = PaperPrimitives.CircleTarget(position, width);
        return circ;
    }
}

module.exports = PortRenderer;