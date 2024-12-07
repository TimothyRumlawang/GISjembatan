var wms_layers = [];


        var lyr_jembatan_0 = new ol.layer.Tile({
            'title': 'jembatan',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_jembatan_koordinat_1 = new ol.format.GeoJSON();
var features_jembatan_koordinat_1 = format_jembatan_koordinat_1.readFeatures(json_jembatan_koordinat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jembatan_koordinat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jembatan_koordinat_1.addFeatures(features_jembatan_koordinat_1);
var lyr_jembatan_koordinat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jembatan_koordinat_1, 
                style: style_jembatan_koordinat_1,
                popuplayertitle: "jembatan_koordinat",
                interactive: true,
                title: '<img src="styles/legend/jembatan_koordinat_1.png" /> jembatan_koordinat'
            });

lyr_jembatan_0.setVisible(true);lyr_jembatan_koordinat_1.setVisible(true);
var layersList = [lyr_jembatan_0,lyr_jembatan_koordinat_1];
lyr_jembatan_koordinat_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nama': 'nama', });
lyr_jembatan_koordinat_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_jembatan_koordinat_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nama': 'inline label - always visible', });
lyr_jembatan_koordinat_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});