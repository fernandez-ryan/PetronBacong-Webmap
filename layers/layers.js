var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_SpotElevation_1 = new ol.format.GeoJSON();
var features_SpotElevation_1 = format_SpotElevation_1.readFeatures(json_SpotElevation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpotElevation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpotElevation_1.addFeatures(features_SpotElevation_1);
var lyr_SpotElevation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpotElevation_1, 
                style: style_SpotElevation_1,
                interactive: true,
                title: 'Spot Elevation'
            });
var format_CountourLines_2 = new ol.format.GeoJSON();
var features_CountourLines_2 = format_CountourLines_2.readFeatures(json_CountourLines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountourLines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountourLines_2.addFeatures(features_CountourLines_2);
var lyr_CountourLines_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CountourLines_2, 
                style: style_CountourLines_2,
                interactive: true,
                title: '<img src="styles/legend/CountourLines_2.png" /> Countour Lines'
            });
var format_ACADPolygon_3 = new ol.format.GeoJSON();
var features_ACADPolygon_3 = format_ACADPolygon_3.readFeatures(json_ACADPolygon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACADPolygon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACADPolygon_3.addFeatures(features_ACADPolygon_3);
var lyr_ACADPolygon_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACADPolygon_3, 
                style: style_ACADPolygon_3,
                interactive: true,
                title: '<img src="styles/legend/ACADPolygon_3.png" /> ACAD-Polygon'
            });
var format_ACADLlines_4 = new ol.format.GeoJSON();
var features_ACADLlines_4 = format_ACADLlines_4.readFeatures(json_ACADLlines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACADLlines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACADLlines_4.addFeatures(features_ACADLlines_4);
var lyr_ACADLlines_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACADLlines_4, 
                style: style_ACADLlines_4,
                interactive: true,
                title: '<img src="styles/legend/ACADLlines_4.png" /> ACAD-Llines'
            });
var format_ACADPoints_5 = new ol.format.GeoJSON();
var features_ACADPoints_5 = format_ACADPoints_5.readFeatures(json_ACADPoints_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACADPoints_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACADPoints_5.addFeatures(features_ACADPoints_5);
var lyr_ACADPoints_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACADPoints_5, 
                style: style_ACADPoints_5,
                interactive: true,
                title: '<img src="styles/legend/ACADPoints_5.png" /> ACAD-Points'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_SpotElevation_1.setVisible(true);lyr_CountourLines_2.setVisible(true);lyr_ACADPolygon_3.setVisible(true);lyr_ACADLlines_4.setVisible(true);lyr_ACADPoints_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_SpotElevation_1,lyr_CountourLines_2,lyr_ACADPolygon_3,lyr_ACADLlines_4,lyr_ACADPoints_5];
lyr_SpotElevation_1.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_CountourLines_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ACADPolygon_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ACADLlines_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ACADPoints_5.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_SpotElevation_1.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr_CountourLines_2.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ACADPolygon_3.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_ACADLlines_4.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ACADPoints_5.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_SpotElevation_1.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr_CountourLines_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ACADPolygon_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ACADLlines_4.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ACADPoints_5.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ACADPoints_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});