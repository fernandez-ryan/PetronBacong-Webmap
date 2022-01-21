var size = 0;
var placement = 'point';

var style_SpotElevation_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    ''
    var labelText = "";
    size = 0;
    var labelFont = "16.900000000000002px \'Arial\', sans-serif";
    var labelFill = "#ff0101";
    var bufferColor = "#000000";
    var bufferWidth = 0.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("field_3") !== null) {
        labelText = String(feature.get("field_3"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
