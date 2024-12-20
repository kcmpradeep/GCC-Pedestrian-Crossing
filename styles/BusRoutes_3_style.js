var size = 0;
var placement = 'point';
function categories_BusRoutes_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '102K':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,15,202,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '119':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(47,140,206,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '159A':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(187,230,33,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '17D':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,235,37,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '26':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(167,116,219,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '29C':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,101,81,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2A':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(16,23,225,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '32B':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(38,228,203,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,14,103,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '48C':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(87,236,137,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BusRoutes_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Route_ID");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_BusRoutes_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
