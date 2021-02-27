const countries = [{id:1,nombre:"Andorra"},{id:2,nombre:"Emiratos Árabes Unidos"},{id:3,nombre:"Afganistán"},{id:4,nombre:"Antigua y Barbuda"},{id:5,nombre:"Anguila"},{id:6,nombre:"Albania"},{id:7,nombre:"Armenia"},{id:8,nombre:"Antillas Neerlandesas"},{id:9,nombre:"Angola"},{id:10,nombre:"Antártida"},{id:11,nombre:"Argentina"},{id:12,nombre:"Samoa Americana"},{id:13,nombre:"Austria"},{id:14,nombre:"Australia"},{id:15,nombre:"Aruba"},{id:16,nombre:"Islas de Aland"},{id:17,nombre:"Azerbayán"},{id:18,nombre:"Bosnia y Herzegovina"},{id:19,nombre:"Barbados"},{id:20,nombre:"Bangladesh"},{id:21,nombre:"Bélgica"},{id:22,nombre:"Burkina Faso"},{id:23,nombre:"Bulgaria"},{id:24,nombre:"Bahrein"},{id:25,nombre:"Burundi"},{id:26,nombre:"Benín"},{id:27,nombre:"San Bartolomé"},{id:28,nombre:"Islas Bermudas"},{id:29,nombre:"Brunéi"},{id:30,nombre:"Bolivia"},{id:31,nombre:"Brasil"},{id:32,nombre:"Bahamas"},{id:33,nombre:"Bhután"},{id:34,nombre:"Isla Bouvet"},{id:35,nombre:"Botsuana"},{id:36,nombre:"Bielorrusia"},{id:37,nombre:"Belice"},{id:38,nombre:"Canadá"},{id:39,nombre:"Islas Cocos (Keeling)"},{id:40,nombre:"Congo"},{id:41,nombre:"República Centroafricana"},{id:42,nombre:"Congo"},{id:43,nombre:"Suiza"},{id:44,nombre:"Costa de Marfil"},{id:45,nombre:"Islas Cook"},{id:46,nombre:"Chile"},{id:47,nombre:"Camerún"},{id:48,nombre:"China"},{id:49,nombre:"Colombia"},{id:50,nombre:"Costa Rica"},{id:51,nombre:"Cuba"},{id:52,nombre:"Cabo Verde"},{id:53,nombre:"Isla de Navidad"},{id:54,nombre:"Chipre"},{id:55,nombre:"República Checa"},{id:56,nombre:"Alemania"},{id:57,nombre:"Yibuti"},{id:58,nombre:"Dinamarca"},{id:59,nombre:"Dominica"},{id:60,nombre:"República Dominicana"},{id:61,nombre:"Algeria"},{id:62,nombre:"Ecuador"},{id:63,nombre:"Estonia"},{id:64,nombre:"Egipto"},{id:65,nombre:"Sahara Occidental"},{id:66,nombre:"Eritrea"},{id:67,nombre:"España"},{id:68,nombre:"Etiopía"},{id:69,nombre:"Finlandia"},{id:70,nombre:"Fiyi"},{id:71,nombre:"Islas Malvinas"},{id:72,nombre:"Micronesia"},{id:73,nombre:"Islas Feroe"},{id:74,nombre:"Francia"},{id:75,nombre:"Gabón"},{id:76,nombre:"Reino Unido"},{id:77,nombre:"Granada"},{id:78,nombre:"Georgia"},{id:79,nombre:"Guayana Francesa"},{id:80,nombre:"Guernsey"},{id:81,nombre:"Ghana"},{id:82,nombre:"Gibraltar"},{id:83,nombre:"Groenlandia"},{id:84,nombre:"Gambia"},{id:85,nombre:"Guinea"},{id:86,nombre:"Guadalupe"},{id:87,nombre:"Guinea Ecuatorial"},{id:88,nombre:"Grecia"},{id:89,nombre:"Islas Georgias del Sur y Sandwich del Sur"},{id:90,nombre:"Guatemala"},{id:91,nombre:"Guam"},{id:92,nombre:"Guinea-Bissau"},{id:93,nombre:"Guyana"},{id:94,nombre:"Hong kong"},{id:95,nombre:"Islas Heard y McDonald"},{id:96,nombre:"Honduras"},{id:97,nombre:"Croacia"},{id:98,nombre:"Haití"},{id:99,nombre:"Hungría"},{id:100,nombre:"Indonesia"},{id:101,nombre:"Irlanda"},{id:102,nombre:"Israel"},{id:103,nombre:"Isla de Man"},{id:104,nombre:"India"},{id:105,nombre:"Territorio Británico del Océano Índico"},{id:106,nombre:"Irak"},{id:107,nombre:"Irán"},{id:108,nombre:"Islandia"},{id:109,nombre:"Italia"},{id:110,nombre:"Jersey"},{id:111,nombre:"Jamaica"},{id:112,nombre:"Jordania"},{id:113,nombre:"Japón"},{id:114,nombre:"Kenia"},{id:115,nombre:"Kirgizstán"},{id:116,nombre:"Camboya"},{id:117,nombre:"Kiribati"},{id:118,nombre:"Comoras"},{id:119,nombre:"San Cristóbal y Nieves"},{id:120,nombre:"Corea del Norte"},{id:121,nombre:"Corea del Sur"},{id:122,nombre:"Kuwait"},{id:123,nombre:"Islas Caimán"},{id:124,nombre:"Kazajistán"},{id:125,nombre:"Laos"},{id:126,nombre:"Líbano"},{id:127,nombre:"Santa Lucía"},{id:128,nombre:"Liechtenstein"},{id:129,nombre:"Sri lanka"},{id:130,nombre:"Liberia"},{id:131,nombre:"Lesoto"},{id:132,nombre:"Lituania"},{id:133,nombre:"Luxemburgo"},{id:134,nombre:"Letonia"},{id:135,nombre:"Libia"},{id:136,nombre:"Marruecos"},{id:137,nombre:"Mónaco"},{id:138,nombre:"Moldavia"},{id:139,nombre:"Montenegro"},{id:140,nombre:"San Martín (Francia)"},{id:141,nombre:"Madagascar"},{id:142,nombre:"Islas Marshall"},{id:143,nombre:"Macedônia"},{id:144,nombre:"Mali"},{id:145,nombre:"Birmania"},{id:146,nombre:"Mongolia"},{id:147,nombre:"Macao"},{id:148,nombre:"Islas Marianas del Norte"},{id:149,nombre:"Martinica"},{id:150,nombre:"Mauritania"},{id:151,nombre:"Montserrat"},{id:152,nombre:"Malta"},{id:153,nombre:"Mauricio"},{id:154,nombre:"Islas Maldivas"},{id:155,nombre:"Malawi"},{id:156,nombre:"México"},{id:157,nombre:"Malasia"},{id:158,nombre:"Mozambique"},{id:159,nombre:"Namibia"},{id:160,nombre:"Nueva Caledonia"},{id:161,nombre:"Niger"},{id:162,nombre:"Isla Norfolk"},{id:163,nombre:"Nigeria"},{id:164,nombre:"Nicaragua"},{id:165,nombre:"Países Bajos"},{id:166,nombre:"Noruega"},{id:167,nombre:"Nepal"},{id:168,nombre:"Nauru"},{id:169,nombre:"Niue"},{id:170,nombre:"Nueva Zelanda"},{id:171,nombre:"Omán"},{id:172,nombre:"Panamá"},{id:173,nombre:"Perú"},{id:174,nombre:"Polinesia Francesa"},{id:175,nombre:"Papúa Nueva Guinea"},{id:176,nombre:"Filipinas"},{id:177,nombre:"Pakistán"},{id:178,nombre:"Polonia"},{id:179,nombre:"San Pedro y Miquelón"},{id:180,nombre:"Islas Pitcairn"},{id:181,nombre:"Puerto Rico"},{id:182,nombre:"Palestina"},{id:183,nombre:"Portugal"},{id:184,nombre:"Palau"},{id:185,nombre:"Paraguay"},{id:186,nombre:"Qatar"},{id:187,nombre:"Reunión"},{id:188,nombre:"Rumanía"},{id:189,nombre:"Serbia"},{id:190,nombre:"Rusia"},{id:191,nombre:"Ruanda"},{id:192,nombre:"Arabia Saudita"},{id:193,nombre:"Islas Salomón"},{id:194,nombre:"Seychelles"},{id:195,nombre:"Sudán"},{id:196,nombre:"Suecia"},{id:197,nombre:"Singapur"},{id:198,nombre:"Santa Elena"},{id:199,nombre:"Eslovenia"},{id:200,nombre:"Svalbard y Jan Mayen"},{id:201,nombre:"Eslovaquia"},{id:202,nombre:"Sierra Leona"},{id:203,nombre:"San Marino"},{id:204,nombre:"Senegal"},{id:205,nombre:"Somalia"},{id:206,nombre:"Surinám"},{id:207,nombre:"Santo Tomé y Príncipe"},{id:208,nombre:"El Salvador"},{id:209,nombre:"Siria"},{id:210,nombre:"Swazilandia"},{id:211,nombre:"Islas Turcas y Caicos"},{id:212,nombre:"Chad"},{id:213,nombre:"Territorios Australes y Antárticas Franceses"},{id:214,nombre:"Togo"},{id:215,nombre:"Tailandia"},{id:216,nombre:"Tadjikistán"},{id:217,nombre:"Tokelau"},{id:218,nombre:"Timor Oriental"},{id:219,nombre:"Turkmenistán"},{id:220,nombre:"Tunez"},{id:221,nombre:"Tonga"},{id:222,nombre:"Turquía"},{id:223,nombre:"Trinidad y Tobago"},{id:224,nombre:"Tuvalu"},{id:225,nombre:"Taiwán"},{id:226,nombre:"Tanzania"},{id:227,nombre:"Ucrania"},{id:228,nombre:"Uganda"},{id:229,nombre:"Islas Ultramarinas Menores de Estados Unidos"},{id:230,nombre:"Estados Unidos de América"},{id:231,nombre:"Uruguay"},{id:232,nombre:"Uzbekistán"},{id:233,nombre:"Ciudad del Vaticano"},{id:234,nombre:"San Vicente y las Granadinas"},{id:235,nombre:"Venezuela"},{id:236,nombre:"Islas Vírgenes Británicas"},{id:237,nombre:"Islas Vírgenes de los Estados Unidos"},{id:238,nombre:"Vietnam"},{id:239,nombre:"Vanuatu"},{id:240,nombre:"Wallis y Futuna"},{id:241,nombre:"Samoa"},{id:242,nombre:"Yemen"},{id:243,nombre:"Mayotte"},{id:244,nombre:"Sudáfrica"},{id:245,nombre:"Zambia"},{id:246,nombre:"Zimbabue"},]
export default countries;