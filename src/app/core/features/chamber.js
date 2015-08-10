var Feature = require('../feature');
var Registry = require('../registry');
var Parameters = require('../parameters');
var Params = require('../params');

var PointValue = Parameters.PointValue;
var FloatValue = Parameters.FloatValue;

class Chamber extends Feature {
    constructor(values, name = "New Chamber") {
        Feature.checkDefaults(values, Chamber);
        let params = new Params(values, Chamber.getUniqueParameters(), Chamber.getHeritableParameters());
        super(Chamber.typeString(), params, name);
    }

    static typeString() {
        return "Chamber";
    }

    static getUniqueParameters() {
        return {
            "start": PointValue.typeString(),
            "end": PointValue.typeString()
        }
    }

    static getHeritableParameters() {
        return {
            "borderWidth": FloatValue.typeString(),
            "height": FloatValue.typeString()
        };
    }

    static getDefaultValues() {
        return {
            "borderWidth": .4 * 1000,
            "height": .1 * 1000
        };
    }
}

Registry.registeredFeatures[Chamber.typeString()] = Chamber;

module.exports = Chamber;