let render2D = {
    Via: {
        featureParams: {
            position: "position",
            radius1: "radius1",
            radius2: "radius2"
        },
        targetParams: {
            radius1: "radius1",
            radius2: "radius2"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "GradientCircle",
        targetPrimitiveType: "CircleTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Port: {
        featureParams: {
            position: "position",
            radius1: "portRadius",
            radius2: "portRadius"
        },
        targetParams: {
            radius1: "portRadius",
            radius2: "portRadius"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "GradientCircle",
        targetPrimitiveType: "CircleTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Node: {
        featureParams: {
            position: "position",
            radius1: "radius1",
            radius2: "radius2"
        },
        targetParams: {
            radius1: "radius1",
            radius2: "radius2"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "GradientCircle",
        targetPrimitiveType: "CircleTarget",
        targetPrimitiveSet: "Basic2D"
    },
    CircleValve: {
        featureParams: {
            position: "position",
            radius1: "radius1",
            radius2: "radius2"
        },
        targetParams: {
            radius1: "radius1",
            radius2: "radius2"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "GradientCircle",
        targetPrimitiveType: "CircleTarget",
        targetPrimitiveSet: "Basic2D"
    },
    RectValve: {
        featureParams: {
            position: "position",
            width: "width",
            length: "length"
        },
        targetParams: {
            width: "width",
            length: "length"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "EdgedRect",
        targetPrimitiveType: "EdgedRectTarget",
        targetPrimitiveSet: "Basic2D"
    },
    AlignmentMarks: {
        featureParams: {
            position: "position",
            width: "width",
            length: "length"
        },
        targetParams: {
            width: "width",
            length: "length"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "AlignmentMarks",
        targetPrimitiveType: "AlignmentMarksTarget",
        targetPrimitiveSet: "Basic2D"
    },
    AlignmentMarks_control: {
        featureParams: {
            position: "position",
            width: "width",
            length: "length"
        },
        targetParams: {
            width: "width",
            length: "length"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "AlignmentMarks_control",
        targetPrimitiveType: "AlignmentMarksTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Valve3D: {
        featureParams: {
            position: "position",
            orientation: "orientation",
            radius1: "valveRadius",
            radius2: "valveRadius",
            valveRadius: "valveRadius",
            gap: "gap"
        },
        targetParams: {
            radius1: "valveRadius",
            radius2: "valveRadius"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "GroverValve",
        targetPrimitiveType: "CircleTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Valve3D_control: {
        featureParams: {
            position: "position",
            orientation: "orientation",
            radius1: "valveRadius",
            radius2: "valveRadius",
            valveRadius: "valveRadius",
            gap: "gap"
        },
        targetParams: {
            radius1: "valveRadius",
            radius2: "valveRadius"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "GroverValve_control",
        targetPrimitiveType: "CircleTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Transposer: {
        featureParams: {
            position: "position",
            orientation: "orientation",
            radius1: "valveRadius",
            radius2: "valveRadius",
            valveRadius: "valveRadius",
            gap: "gap",
            valveSpacing: "valveSpacing",
            channelWidth: "channelWidth"
        },
        targetParams: {
            radius1: "valveRadius",
            radius2: "valveRadius"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "Transposer",
        targetPrimitiveType: "TransposerTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Transposer_control: {
        featureParams: {
            position: "position",
            orientation: "orientation",
            radius1: "valveRadius",
            radius2: "valveRadius",
            valveRadius: "valveRadius",
            gap: "gap",
            valveSpacing: "valveSpacing",
            channelWidth: "channelWidth"
        },
        targetParams: {
            radius1: "valveRadius",
            radius2: "valveRadius"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "Transposer_control",
        targetPrimitiveType: "CircleTarget",
        targetPrimitiveSet: "Basic2D"
    },
    RotaryMixer: {
        featureParams: {
            position: "position",
            orientation: "orientation",
            flowChannelWidth: "flowChannelWidth",
            radius: "radius",
            valveWidth:"valveWidth",
            valveLength:"valveLength",
            valveSpacing:"valveSpacing",
            height: "height"
        },
        targetParams: {
            position: "position",
            orientation: "orientation",
            flowChannelWidth: "flowChannelWidth",
            radius: "radius",
            valveWidth:"valveWidth",
            valveLength:"valveLength",
            valveSpacing:"valveSpacing",
            height: "height"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "RotaryMixer",
        targetPrimitiveType: "RotaryMixerTarget",
        targetPrimitiveSet: "Basic2D"
    },
    RotaryMixer_control: {
        featureParams: {
            position: "position",
            orientation: "orientation",
            flowChannelWidth: "flowChannelWidth",
            radius: "radius",
            valveWidth:"valveWidth",
            valveLength:"valveLength",
            valveSpacing:"valveSpacing",
            height:"height"
        },
        targetParams: {
            position: "position",
            orientation: "orientation",
            flowChannelWidth: "flowChannelWidth",
            radius: "radius",
            valveWidth:"valveWidth",
            valveLength:"valveLength",
            valveSpacing:"valveSpacing",
            height:"height"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "RotaryMixer_control",
        targetPrimitiveType: "CircleTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Channel: {
        featureParams: {
            start: "start",
            end: "end",
            width: "channelWidth"
        },
        targetParams: {
            diameter: "channelWidth",
            channelWidth: "channelWidth"
        },
        featurePrimitiveType: "EdgedRectLine",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "CrossHairsTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Connection: {
        featureParams: {
            start: "start",
            end: "end",
            wayPoints: "wayPoints",
            channelWidth: "channelWidth",
            height: "height"
        },
        targetParams: {
            wayPoints: "wayPoints",
            channelWidth: "channelWidth",
            height: "height"
        },
        featurePrimitiveType: "Connection",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "ConnectionTarget",
        targetPrimitiveSet: "Basic2D"
    },
    RoundedChannel: {
        featureParams: {
            start: "start",
            end: "end",
            width: "channelWidth"
        },
        targetParams: {
            diameter: "channelWidth"
        },
        featurePrimitiveType: "RoundedRectLine",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "CircleTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Transition: {
        featureParams: {
            position: "position",
            cw1: "cw1",
            cw2: "cw2",
            length: "length",
            orientation: "orientation"
        },
        targetParams: {
            cw1: "cw1",
            cw2: "cw2",
            length: "length",
            orientation: "orientation"
        },
        featurePrimitiveType: "Transition",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "TransitionTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Chamber: {
        featureParams: {
            position: "position",
            width: "width",
            length: "length",
            height: "height",
            cornerRadius: "cornerRadius",
            rotation: "rotation"
        },
        targetParams: {
            position: "position",
            width: "width",
            length: "length",
            height: "height",
            cornerRadius: "cornerRadius",
            rotation: "rotation"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "Chamber",
        targetPrimitiveSet: "Basic2D",
        targetPrimitiveType: "ChamberTarget"
    },
    DiamondReactionChamber: {
        featureParams: {
            position: "position",
            orientation: "orientation",
            channelWidth: "channelWidth",
            length: "length",
            width: "width"
        },
        targetParams: {
            channelWidth: "channelWidth",
            length: "length",
            width: "width",
            orientation: "orientation"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "Diamond",
        targetPrimitiveType: "DiamondTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Valve: {
        featureParams: {
            position: "position",
            length: "length",
            width: "width",
            orientation: "orientation"
        },
        targetParams: {
            length: "length",
            width: "width",
            orientation: "orientation"

        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "Valve",
        targetPrimitiveType: "ValveTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Circuit: {
        featureParams: {
            position: "position",
            length: "length",
            width: "width",
            radius: "radius"
        },
        targetParams: {
            length: "length",
            width: "width",
            radius: "radius"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "Circuit",
        targetPrimitiveType: "CircuitTarget",
        targetPrimitiveSet: "Basic2D"
    },
    BetterMixer: {
        featureParams: {
            position: "position",
            channelWidth: "channelWidth",
            bendSpacing: "bendSpacing",
            numberOfBends: "numberOfBends",
            orientation: "orientation",
            bendLength: "bendLength"
        },
        targetParams: {
            channelWidth: "channelWidth",
            bendSpacing: "bendSpacing",
            numberOfBends: "numberOfBends",
            orientation: "orientation",
            bendLength: "bendLength"
        },
        featurePrimitiveType: "BetterMixer",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "BetterMixerTarget",
        targetPrimitiveSet: "Basic2D"
    },
    CurvedMixer: {
        featureParams: {
            position: "position",
            channelWidth: "channelWidth",
            bendSpacing: "bendSpacing",
            numberOfBends: "numberOfBends",
            orientation: "orientation",
            bendLength: "bendLength"
        },
        targetParams: {
            channelWidth: "channelWidth",
            bendSpacing: "bendSpacing",
            numberOfBends: "numberOfBends",
            orientation: "orientation",
            bendLength: "bendLength"
        },
        featurePrimitiveType: "CurvedMixer",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "CurvedMixerTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Mixer: {
        featureParams: {
            position: "position",
            channelWidth: "channelWidth",
            bendSpacing: "bendSpacing",
            numberOfBends: "numberOfBends",
            orientation: "orientation",
            bendLength: "bendLength"
        },
        targetParams: {
            channelWidth: "channelWidth",
            bendSpacing: "bendSpacing",
            numberOfBends: "numberOfBends",
            orientation: "orientation",
            bendLength: "bendLength"
        },
        featurePrimitiveType: "Mixer",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "MixerTarget",
        targetPrimitiveSet: "Basic2D"
    },
    GradientGenerator: {
        featureParams: {
            position: "position",
            channelWidth: "channelWidth",
            bendSpacing: "bendSpacing",
            numberOfBends: "numberOfBends",
            orientation: "orientation",
            bendLength: "bendLength",
            in: "in",
            out: "out",
            spacing: "spacing",
            rotation: "rotation"
        },
        targetParams: {
            channelWidth: "channelWidth",
            bendSpacing: "bendSpacing",
            numberOfBends: "numberOfBends",
            orientation: "orientation",
            bendLength: "bendLength",
            in: "in",
            out: "out",
            spacing: "spacing",
            rotation: "rotation"
        },
        featurePrimitiveType: "GradientGenerator",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "GradientGeneratorTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Tree: {
        featureParams: {
            position: "position",
            flowChannelWidth: "flowChannelWidth",
            orientation: "orientation",
            spacing: "spacing",
            width: "width",
            leafs: "leafs",
            stageLength: "stageLength",
            direction : "direction"
        },
        targetParams: {
            flowChannelWidth: "flowChannelWidth",
            orientation: "orientation",
            spacing: "spacing",
            width: "width",
            leafs: "leafs",
            stageLength: "stageLength",
            direction:"direction"
        },
        featurePrimitiveType: "Tree",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "TreeTarget",
        targetPrimitiveSet: "Basic2D"
    },
    YTree: {
        featureParams: {
            position: "position",
            flowChannelWidth: "flowChannelWidth",
            orientation: "orientation",
            spacing: "spacing",
            width: "width",
            leafs: "leafs",
            stageLength: "stageLength",
            direction : "direction"
        },
        targetParams: {
            flowChannelWidth: "flowChannelWidth",
            orientation: "orientation",
            spacing: "spacing",
            width: "width",
            leafs: "leafs",
            stageLength: "stageLength",
            direction:"direction"
        },
        featurePrimitiveType: "YTree",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "YTreeTarget",
        targetPrimitiveSet: "Basic2D"
    },
    Mux: {
        featureParams: {
            position: "position",
            flowChannelWidth: "flowChannelWidth",
            controlchannelWidth: "controlChannelWidth",
            orientation: "orientation",
            spacing: "spacing",
            width: "width",
            length: "length",
            leafs: "leafs",
            stageLength: "stageLength",
            direction : "direction"
        },
        targetParams: {
            flowChannelWidth: "flowChannelWidth",
            orientation: "orientation",
            spacing: "spacing",
            width: "width",
            length: "length",
            leafs: "leafs",
            stageLength: "stageLength",
            direction:"direction"
        },
        featurePrimitiveType: "Mux",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "Mux",
        targetPrimitiveSet: "Basic2D"
    },
    Mux_control: {
        featureParams: {
            position: "position",
            flowChannelWidth: "flowChannelWidth",
            controlChannelWidth: "controlChannelWidth",
            orientation: "orientation",
            spacing: "spacing",
            width: "width",
            length: "length",
            leafs: "leafs",
            stageLength: "stageLength",
            direction : "direction"
        },
        targetParams: {
            flowChannelWidth: "flowChannelWidth",
            orientation: "orientation",
            spacing: "spacing",
            width: "width",
            length: "length",
            leafs: "leafs",
            stageLength: "stageLength",
            direction:"direction"
        },
        featurePrimitiveType: "Mux_control",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "Mux_control",
        targetPrimitiveSet: "Basic2D"
    },
    CellTrapL: {
        featureParams: {
            position: "position",
            chamberLength: "chamberLength",
            feedingChannelWidth: "feedingChannelWidth",
            orientation: "orientation",
            chamberWidth: "chamberWidth",
            numberOfChambers: "numberOfChambers",
            chamberSpacing: "chamberSpacing",
            radius1: "chamberWidth",
            radius2: "chamberSpacing"
        },
        targetParams: {
            chamberLength: "chamberLength",
            feedingChannelWidth: "feedingChannelWidth",
            orientation: "orientation",
            chamberWidth: "chamberWidth",
            numberOfChambers: "numberOfChambers",
            chamberSpacing: "chamberSpacing",
            radius1: "chamberSpacing",
            radius2: "chamberSpacing"
        },
        featurePrimitiveType: "CellTrapL",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "CellTrapLTarget",
        targetPrimitiveSet: "Basic2D"
    },
    CellTrapL_cell: {
        featureParams: {
            position: "position",
            chamberLength: "chamberLength",
            feedingChannelWidth: "feedingChannelWidth",
            orientation: "orientation",
            chamberWidth: "chamberWidth",
            numberOfChambers: "numberOfChambers",
            chamberSpacing: "chamberSpacing",
            radius1: "chamberWidth",
            radius2: "chamberSpacing"
        },
        targetParams: {
            chamberLength: "chamberLength",
            feedingChannelWidth: "feedingChannelWidth",
            orientation: "orientation",
            chamberWidth: "chamberWidth",
            numberOfChambers: "numberOfChambers",
            chamberSpacing: "chamberSpacing",
            radius1: "chamberSpacing",
            radius2: "chamberSpacing"
        },
        featurePrimitiveType: "CellTrapL_cell",
        featurePrimitiveSet: "Basic2D",
        targetPrimitiveType: "CellTrapLTarget",
        targetPrimitiveSet: "Basic2D"
    },
    DropletGen: {
        featureParams: {
            position: "position",
            orificeSize: "orificeSize",
            orificeLength: "orificeLength",
            oilInputWidth: "oilInputWidth",
            waterInputWidth: "waterInputWidth",
            outputWidth: "outputWidth",
            outputLength: "outputLength",
            height: "height",
            rotation: "rotation"
        },
        targetParams: {
            orificeSize: "orificeSize",
            orificeLength: "orificeLength",
            oilInputWidth: "oilInputWidth",
            waterInputWidth: "waterInputWidth",
            outputWidth: "outputWidth",
            outputLength: "outputLength",
            height: "height",
            rotation:"rotation"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "DropletGen",
        targetPrimitiveType: "DropletGenTarget",
        targetPrimitiveSet: "Basic2D"
    },
    TEXT: {
        featureParams: {
            position: "position",
            outputLength: "outputLength",
            height: "height",
            rotation: "rotation"
        },
        targetParams: {
            height: "height",
            rotation:"rotation"
        },
        featurePrimitiveSet: "Basic2D",
        featurePrimitiveType: "blah",
        targetPrimitiveType: "blah",
        targetPrimitiveSet: "Basic2D"
    },
};

module.exports = render2D;