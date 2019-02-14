const Colors = require("../colors");
import paper from 'paper';


export default class ComponentPortRenderer2D{

    static renderComponentPort(componentport, topleftposition, centerposition, rotation){
        // console.log("Rendering...", componentport, topleftposition, centerposition,rotation);
        let xpos = topleftposition[0];
        let ypos = topleftposition[1];
        let point = new paper.Point(
            xpos + componentport.x,
            ypos + componentport.y
        );

        let circle = paper.Path.Circle(point, 500);

        circle.rotate(rotation, new paper.Point(centerposition[0], centerposition[1]));

        circle.fillColor = Colors.BLACK;

        return circle;
    }

    static renderComponentPorts(component){
        let componentports = component.ports;
        for(let key of componentports.keys()){
            let topleftposition = component.getTopLeftPosition();
            let centerposition = component.getCenterPosition();
            let rotation = component.getRotation();
            ComponentPortRenderer2D.renderComponentPort(
                componentports.get(key),
                topleftposition,
                centerposition,
                rotation
            );
        }
    }
}