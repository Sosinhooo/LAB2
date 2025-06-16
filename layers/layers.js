ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([583286.313460, 5857721.287857, 796001.294187, 5974596.206192]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ComunasSeleccionadas_1 = new ol.format.GeoJSON();
var features_ComunasSeleccionadas_1 = format_ComunasSeleccionadas_1.readFeatures(json_ComunasSeleccionadas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ComunasSeleccionadas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunasSeleccionadas_1.addFeatures(features_ComunasSeleccionadas_1);
var lyr_ComunasSeleccionadas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunasSeleccionadas_1, 
                style: style_ComunasSeleccionadas_1,
                popuplayertitle: 'Comunas Seleccionadas',
                interactive: true,
                title: '<img src="styles/legend/ComunasSeleccionadas_1.png" /> Comunas Seleccionadas'
            });
var format_BarriosSeleccionados_2 = new ol.format.GeoJSON();
var features_BarriosSeleccionados_2 = format_BarriosSeleccionados_2.readFeatures(json_BarriosSeleccionados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_BarriosSeleccionados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarriosSeleccionados_2.addFeatures(features_BarriosSeleccionados_2);
var lyr_BarriosSeleccionados_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarriosSeleccionados_2, 
                style: style_BarriosSeleccionados_2,
                popuplayertitle: 'Barrios Seleccionados',
                interactive: true,
                title: '<img src="styles/legend/BarriosSeleccionados_2.png" /> Barrios Seleccionados'
            });
var format_SitiosTursticos_3 = new ol.format.GeoJSON();
var features_SitiosTursticos_3 = format_SitiosTursticos_3.readFeatures(json_SitiosTursticos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_SitiosTursticos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosTursticos_3.addFeatures(features_SitiosTursticos_3);
cluster_SitiosTursticos_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SitiosTursticos_3
});
var lyr_SitiosTursticos_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SitiosTursticos_3, 
                style: style_SitiosTursticos_3,
                popuplayertitle: 'Sitios Turísticos',
                interactive: true,
    title: 'Sitios Turísticos<br />\
    <img src="styles/legend/SitiosTursticos_3_0.png" /> Arco de Medicina UdeC<br />\
    <img src="styles/legend/SitiosTursticos_3_1.png" /> Catedral de Concepción<br />\
    <img src="styles/legend/SitiosTursticos_3_2.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/SitiosTursticos_3_3.png" /> El Morro de Talcahuano<br />\
    <img src="styles/legend/SitiosTursticos_3_4.png" /> Estadio Ester Roa Rebolledo<br />\
    <img src="styles/legend/SitiosTursticos_3_5.png" /> Estadio Huachipato CAP-Acero<br />\
    <img src="styles/legend/SitiosTursticos_3_6.png" /> Fuerte La Planchada<br />\
    <img src="styles/legend/SitiosTursticos_3_7.png" /> Laguna Lo Galindo<br />\
    <img src="styles/legend/SitiosTursticos_3_8.png" /> Laguna Lo Mendez<br />\
    <img src="styles/legend/SitiosTursticos_3_9.png" /> Laguna Tres Pascualas<br />\
    <img src="styles/legend/SitiosTursticos_3_10.png" /> Lata Jurel Gigante<br />\
    <img src="styles/legend/SitiosTursticos_3_11.png" /> Museo Lota<br />\
    <img src="styles/legend/SitiosTursticos_3_12.png" /> Parque Ecuador<br />\
    <img src="styles/legend/SitiosTursticos_3_13.png" /> Playa de Tomé<br />\
    <img src="styles/legend/SitiosTursticos_3_14.png" /> Plaza Bélgica<br />\
    <img src="styles/legend/SitiosTursticos_3_15.png" /> Plaza de la Independencia<br />\
    <img src="styles/legend/SitiosTursticos_3_16.png" /> Plaza Lota<br />\
    <img src="styles/legend/SitiosTursticos_3_17.png" /> Plaza Perú<br />\
    <img src="styles/legend/SitiosTursticos_3_18.png" /> Termoeléctrica Bocamina<br />\
    <img src="styles/legend/SitiosTursticos_3_19.png" /> Zoológico de Nonguén<br />\
    <img src="styles/legend/SitiosTursticos_3_20.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ComunasSeleccionadas_1.setVisible(true);lyr_BarriosSeleccionados_2.setVisible(true);lyr_SitiosTursticos_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ComunasSeleccionadas_1,lyr_BarriosSeleccionados_2,lyr_SitiosTursticos_3];
lyr_ComunasSeleccionadas_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_BarriosSeleccionados_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_SitiosTursticos_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_ComunasSeleccionadas_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_BarriosSeleccionados_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_SitiosTursticos_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_ComunasSeleccionadas_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'inline label - visible with data', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_BarriosSeleccionados_2.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_SitiosTursticos_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', });
lyr_SitiosTursticos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});