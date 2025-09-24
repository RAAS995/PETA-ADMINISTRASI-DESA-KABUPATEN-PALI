var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DESA_PALI_1 = new ol.format.GeoJSON();
var features_DESA_PALI_1 = format_DESA_PALI_1.readFeatures(json_DESA_PALI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_PALI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_PALI_1.addFeatures(features_DESA_PALI_1);
var lyr_DESA_PALI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESA_PALI_1, 
                style: style_DESA_PALI_1,
                popuplayertitle: 'DESA_PALI',
                interactive: true,
    title: 'DESA_PALI<br />\
    <img src="styles/legend/DESA_PALI_1_0.png" /> <br />\
    <img src="styles/legend/DESA_PALI_1_1.png" /> Air Itam<br />\
    <img src="styles/legend/DESA_PALI_1_2.png" /> Air Itam Timur<br />\
    <img src="styles/legend/DESA_PALI_1_3.png" /> Babat<br />\
    <img src="styles/legend/DESA_PALI_1_4.png" /> Benakat Minyak<br />\
    <img src="styles/legend/DESA_PALI_1_5.png" /> Benuang<br />\
    <img src="styles/legend/DESA_PALI_1_6.png" /> Beruge Darat<br />\
    <img src="styles/legend/DESA_PALI_1_7.png" /> Betung<br />\
    <img src="styles/legend/DESA_PALI_1_8.png" /> Betung Barat<br />\
    <img src="styles/legend/DESA_PALI_1_9.png" /> Betung Selatan<br />\
    <img src="styles/legend/DESA_PALI_1_10.png" /> Bumi Ayu<br />\
    <img src="styles/legend/DESA_PALI_1_11.png" /> Curup<br />\
    <img src="styles/legend/DESA_PALI_1_12.png" /> Gunung Menang<br />\
    <img src="styles/legend/DESA_PALI_1_13.png" /> Gunung Raja<br />\
    <img src="styles/legend/DESA_PALI_1_14.png" /> Handayani Mulya<br />\
    <img src="styles/legend/DESA_PALI_1_15.png" /> Harapan Jaya<br />\
    <img src="styles/legend/DESA_PALI_1_16.png" /> Karang Agung<br />\
    <img src="styles/legend/DESA_PALI_1_17.png" /> Karang Tanding<br />\
    <img src="styles/legend/DESA_PALI_1_18.png" /> Karta Dewa<br />\
    <img src="styles/legend/DESA_PALI_1_19.png" /> Kota Baru<br />\
    <img src="styles/legend/DESA_PALI_1_20.png" /> Lubuk Tampui<br />\
    <img src="styles/legend/DESA_PALI_1_21.png" /> Lunas Jaya<br />\
    <img src="styles/legend/DESA_PALI_1_22.png" /> Mangkunegara<br />\
    <img src="styles/legend/DESA_PALI_1_23.png" /> Mangkunegara Timur<br />\
    <img src="styles/legend/DESA_PALI_1_24.png" /> Modong<br />\
    <img src="styles/legend/DESA_PALI_1_25.png" /> Muara Dua<br />\
    <img src="styles/legend/DESA_PALI_1_26.png" /> Muara Ikan<br />\
    <img src="styles/legend/DESA_PALI_1_27.png" /> Muara Sungai<br />\
    <img src="styles/legend/DESA_PALI_1_28.png" /> Pandan<br />\
    <img src="styles/legend/DESA_PALI_1_29.png" /> Panta Dewa<br />\
    <img src="styles/legend/DESA_PALI_1_30.png" /> Pasar Bhayangkara<br />\
    <img src="styles/legend/DESA_PALI_1_31.png" /> Pengabuan<br />\
    <img src="styles/legend/DESA_PALI_1_32.png" /> Pengabuan Timur<br />\
    <img src="styles/legend/DESA_PALI_1_33.png" /> Prabu Menang<br />\
    <img src="styles/legend/DESA_PALI_1_34.png" /> Prambatan<br />\
    <img src="styles/legend/DESA_PALI_1_35.png" /> Purun<br />\
    <img src="styles/legend/DESA_PALI_1_36.png" /> Purun Timur<br />\
    <img src="styles/legend/DESA_PALI_1_37.png" /> Raja<br />\
    <img src="styles/legend/DESA_PALI_1_38.png" /> Raja Barat<br />\
    <img src="styles/legend/DESA_PALI_1_39.png" /> Raja Jaya<br />\
    <img src="styles/legend/DESA_PALI_1_40.png" /> Sedupi<br />\
    <img src="styles/legend/DESA_PALI_1_41.png" /> Semangus<br />\
    <img src="styles/legend/DESA_PALI_1_42.png" /> Simpang Tais<br />\
    <img src="styles/legend/DESA_PALI_1_43.png" /> Sinar Dewa<br />\
    <img src="styles/legend/DESA_PALI_1_44.png" /> Spantan Jaya<br />\
    <img src="styles/legend/DESA_PALI_1_45.png" /> Suka Damai<br />\
    <img src="styles/legend/DESA_PALI_1_46.png" /> Suka Maju<br />\
    <img src="styles/legend/DESA_PALI_1_47.png" /> Suka Raja<br />\
    <img src="styles/legend/DESA_PALI_1_48.png" /> Sukamanis<br />\
    <img src="styles/legend/DESA_PALI_1_49.png" /> Sukaraja<br />\
    <img src="styles/legend/DESA_PALI_1_50.png" /> Sukarami<br />\
    <img src="styles/legend/DESA_PALI_1_51.png" /> Sungai Baung<br />\
    <img src="styles/legend/DESA_PALI_1_52.png" /> Sungai Ibul<br />\
    <img src="styles/legend/DESA_PALI_1_53.png" /> Sungai Langan<br />\
    <img src="styles/legend/DESA_PALI_1_54.png" /> Talang Akar<br />\
    <img src="styles/legend/DESA_PALI_1_55.png" /> Talang Bulang<br />\
    <img src="styles/legend/DESA_PALI_1_56.png" /> Talang Ubi Barat<br />\
    <img src="styles/legend/DESA_PALI_1_57.png" /> Talang Ubi Selatan<br />\
    <img src="styles/legend/DESA_PALI_1_58.png" /> Talang Ubi Timur<br />\
    <img src="styles/legend/DESA_PALI_1_59.png" /> Talang Ubi Utara<br />\
    <img src="styles/legend/DESA_PALI_1_60.png" /> Tambak<br />\
    <img src="styles/legend/DESA_PALI_1_61.png" /> Tanah Abang Jaya<br />\
    <img src="styles/legend/DESA_PALI_1_62.png" /> Tanah Abang Selatan<br />\
    <img src="styles/legend/DESA_PALI_1_63.png" /> Tanah Abang Utara<br />\
    <img src="styles/legend/DESA_PALI_1_64.png" /> Tanding Marga<br />\
    <img src="styles/legend/DESA_PALI_1_65.png" /> Tanjung Baru<br />\
    <img src="styles/legend/DESA_PALI_1_66.png" /> Tanjung Dalam<br />\
    <img src="styles/legend/DESA_PALI_1_67.png" /> Tanjung Kurung<br />\
    <img src="styles/legend/DESA_PALI_1_68.png" /> Tempirai<br />\
    <img src="styles/legend/DESA_PALI_1_69.png" /> Tempirai Selatan<br />\
    <img src="styles/legend/DESA_PALI_1_70.png" /> Tempirai Timur<br />\
    <img src="styles/legend/DESA_PALI_1_71.png" /> Tempirai Utara<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_DESA_PALI_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DESA_PALI_1];
lyr_DESA_PALI_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DESA_PALI_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DESA_PALI_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DESA_PALI_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});