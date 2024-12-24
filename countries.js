const countries = [
  {
    "name": "China",
    "population": 1409670000
  },
  {
    "name": "India",
    "population": 1404910000
  },
  {
    "name": "United States",
    "population": 340110988
  },
  {
    "name": "Indonesia",
    "population": 282477584
  },
  {
    "name": "Pakistan",
    "population": 241499431
  },
  {
    "name": "Nigeria",
    "population": 223800000
  },
  {
    "name": "Brazil",
    "population": 203080756
  },
  {
    "name": "Bangladesh",
    "population": 169828911
  },
  {
    "name": "Russia",
    "population": 146150789
  },
  {
    "name": "Mexico",
    "population": 130154247
  },
  {
    "name": "Japan",
    "population": 123740000
  },
  {
    "name": "Philippines",
    "population": 114163719
  },
  {
    "name": "Ethiopia",
    "population": 109499000
  },
  {
    "name": "Egypt",
    "population": 105914499
  },
  {
    "name": "Democratic Republic of the Congo",
    "population": 105247000
  },
  {
    "name": "Vietnam",
    "population": 100309210
  },
  {
    "name": "Iran",
    "population": 85961000
  },
  {
    "name": "Turkey",
    "population": 85372377
  },
  {
    "name": "Germany",
    "population": 84708010
  },
  {
    "name": "France",
    "population": 68551000
  },
  {
    "name": "United Kingdom",
    "population": 68265209
  },
  {
    "name": "Thailand",
    "population": 65969270
  },
  {
    "name": "South Africa",
    "population": 63015904
  },
  {
    "name": "Tanzania",
    "population": 61741120
  },
  {
    "name": "Italy",
    "population": 58968499
  },
  {
    "name": "Myanmar",
    "population": 56712559
  },
  {
    "name": "Colombia",
    "population": 52695952
  },
  {
    "name": "Kenya",
    "population": 52428290
  },
  {
    "name": "South Korea",
    "population": 51248233
  },
  {
    "name": "Sudan",
    "population": 50448963
  },
  {
    "name": "Spain",
    "population": 48946035
  },
  {
    "name": "Argentina",
    "population": 47067441
  },
  {
    "name": "Algeria",
    "population": 46700000
  },
  {
    "name": "Uganda",
    "population": 45935046
  },
  {
    "name": "Iraq",
    "population": 44414800
  },
  {
    "name": "Canada",
    "population": 41465298
  },
  {
    "name": "Poland",
    "population": 37532000
  },
  {
    "name": "Uzbekistan",
    "population": 37355356
  },
  {
    "name": "Morocco",
    "population": 36828330
  },
  {
    "name": "Angola",
    "population": 35121734
  },
  {
    "name": "Afghanistan",
    "population": 34262840
  },
  {
    "name": "Malaysia",
    "population": 34112400
  },
  {
    "name": "Peru",
    "population": 34038457
  },
  {
    "name": "Ukraine",
    "population": 33443000
  },
  {
    "name": "Mozambique",
    "population": 33244414
  },
  {
    "name": "Ghana",
    "population": 33007618
  },
  {
    "name": "Yemen",
    "population": 32305264
  },
  {
    "name": "Saudi Arabia",
    "population": 32175224
  },
  {
    "name": "Madagascar",
    "population": 30811969
  },
  {
    "name": "Ivory Coast",
    "population": 29389150
  },
  {
    "name": "Nepal",
    "population": 29164578
  },
  {
    "name": "Cameroon",
    "population": 28758503
  },
  {
    "name": "Venezuela",
    "population": 28405543
  },
  {
    "name": "Australia",
    "population": 27204800
  },
  {
    "name": "Niger",
    "population": 26312034
  },
  {
    "name": "North Korea",
    "population": 25950000
  },
  {
    "name": "Syria",
    "population": 24672760
  },
  {
    "name": "Burkina Faso",
    "population": 23409015
  },
  {
    "name": "Taiwan",
    "population": 23402804
  },
  {
    "name": "Mali",
    "population": 22395489
  },
  {
    "name": "Sri Lanka",
    "population": 21916000
  },
  {
    "name": "Malawi",
    "population": 20270568
  },
  {
    "name": "Kazakhstan",
    "population": 20243981
  },
  {
    "name": "Chile",
    "population": 20086377
  },
  {
    "name": "Zambia",
    "population": 19610769
  },
  {
    "name": "Romania",
    "population": 19064409
  },
  {
    "name": "Somalia",
    "population": 19009151
  },
  {
    "name": "Chad",
    "population": 18675547
  },
  {
    "name": "Senegal",
    "population": 18126390
  },
  {
    "name": "Netherlands",
    "population": 18038726
  },
  {
    "name": "Guatemala",
    "population": 17843132
  },
  {
    "name": "Cambodia",
    "population": 17336307
  },
  {
    "name": "Ecuador",
    "population": 16938986
  },
  {
    "name": "Zimbabwe",
    "population": 16751469
  },
  {
    "name": "South Sudan",
    "population": 15254268
  },
  {
    "name": "Rwanda",
    "population": 13798561
  },
  {
    "name": "Guinea",
    "population": 13261638
  },
  {
    "name": "Benin",
    "population": 12910087
  },
  {
    "name": "Burundi",
    "population": 12837740
  },
  {
    "name": "Haiti",
    "population": 12394537
  },
  {
    "name": "Tunisia",
    "population": 11887412
  },
  {
    "name": "Belgium",
    "population": 11861621
  },
  {
    "name": "Papua New Guinea",
    "population": 11781559
  },
  {
    "name": "Jordan",
    "population": 11516000
  },
  {
    "name": "Bolivia",
    "population": 11312620
  },
  {
    "name": "Cuba",
    "population": 11089511
  },
  {
    "name": "Czech Republic",
    "population": 10879069
  },
  {
    "name": "Dominican Republic",
    "population": 10771504
  },
  {
    "name": "United Arab Emirates",
    "population": 10678556
  },
  {
    "name": "Portugal",
    "population": 10639726
  },
  {
    "name": "Sweden",
    "population": 10587276
  },
  {
    "name": "Greece",
    "population": 10413982
  },
  {
    "name": "Tajikistan",
    "population": 10277100
  },
  {
    "name": "Azerbaijan",
    "population": 10214441
  },
  {
    "name": "Israel",
    "population": 10003000
  },
  {
    "name": "Honduras",
    "population": 9892632
  },
  {
    "name": "Hungary",
    "population": 9584627
  },
  {
    "name": "Austria",
    "population": 9198124
  },
  {
    "name": "Belarus",
    "population": 9155978
  },
  {
    "name": "Switzerland",
    "population": 9027859
  },
  {
    "name": "Sierra Leone",
    "population": 8884032
  },
  {
    "name": "Togo",
    "population": 8095498
  },
  {
    "name": "Laos",
    "population": 7546000
  },
  {
    "name": "Hong Kong (China)",
    "population": 7531800
  },
  {
    "name": "Libya",
    "population": 7381023
  },
  {
    "name": "Kyrgyzstan",
    "population": 7161900
  },
  {
    "name": "Turkmenistan",
    "population": 7057841
  },
  {
    "name": "Nicaragua",
    "population": 6803886
  },
  {
    "name": "Serbia",
    "population": 6605168
  },
  {
    "name": "Central African Republic",
    "population": 6470307
  },
  {
    "name": "Bulgaria",
    "population": 6445481
  },
  {
    "name": "El Salvador",
    "population": 6351000
  },
  {
    "name": "Republic of the Congo",
    "population": 6142180
  },
  {
    "name": "Paraguay",
    "population": 6109644
  },
  {
    "name": "Singapore",
    "population": 6036900
  },
  {
    "name": "Denmark",
    "population": 5989985
  },
  {
    "name": "Finland",
    "population": 5635560
  },
  {
    "name": "Norway",
    "population": 5585044
  },
  {
    "name": "Lebanon",
    "population": 5490000
  },
  {
    "name": "Palestine",
    "population": 5483450
  },
  {
    "name": "Slovakia",
    "population": 5421272
  },
  {
    "name": "Ireland",
    "population": 5380300
  },
  {
    "name": "New Zealand",
    "population": 5348600
  },
  {
    "name": "Costa Rica",
    "population": 5309625
  },
  {
    "name": "Oman",
    "population": 5252608
  },
  {
    "name": "Liberia",
    "population": 5248621
  },
  {
    "name": "Mauritania",
    "population": 4927532
  },
  {
    "name": "Kuwait",
    "population": 4913271
  },
  {
    "name": "Panama",
    "population": 4064780
  },
  {
    "name": "Croatia",
    "population": 3859686
  },
  {
    "name": "Georgia",
    "population": 3694600
  },
  {
    "name": "Eritrea",
    "population": 3535603
  },
  {
    "name": "Mongolia",
    "population": 3504741
  },
  {
    "name": "Uruguay",
    "population": 3444263
  },
  {
    "name": "Bosnia and Herzegovina",
    "population": 3264873
  },
  {
    "name": "Puerto Rico (US)",
    "population": 3205691
  },
  {
    "name": "Armenia",
    "population": 3039700
  },
  {
    "name": "Namibia",
    "population": 3022401
  },
  {
    "name": "Lithuania",
    "population": 2897443
  },
  {
    "name": "Qatar",
    "population": 2857822
  },
  {
    "name": "Jamaica",
    "population": 2825544
  },
  {
    "name": "Moldova",
    "population": 2423300
  },
  {
    "name": "Gambia",
    "population": 2417471
  },
  {
    "name": "Botswana",
    "population": 2410338
  },
  {
    "name": "Gabon",
    "population": 2408586
  },
  {
    "name": "Albania",
    "population": 2402113
  },
  {
    "name": "Lesotho",
    "population": 2306000
  },
  {
    "name": "Slovenia",
    "population": 2126324
  },
  {
    "name": "Latvia",
    "population": 1857400
  },
  {
    "name": "North Macedonia",
    "population": 1826247
  },
  {
    "name": "Guinea-Bissau",
    "population": 1781308
  },
  {
    "name": "Bahrain",
    "population": 1588670
  },
  {
    "name": "Kosovo",
    "population": 1585566
  },
  {
    "name": "Equatorial Guinea",
    "population": 1558160
  },
  {
    "name": "Estonia",
    "population": 1374687
  },
  {
    "name": "East Timor",
    "population": 1373024
  },
  {
    "name": "Trinidad and Tobago",
    "population": 1368333
  },
  {
    "name": "Mauritius",
    "population": 1259509
  },
  {
    "name": "Eswatini",
    "population": 1235549
  },
  {
    "name": "Djibouti",
    "population": 1066809
  },
  {
    "name": "Cyprus",
    "population": 918100
  },
  {
    "name": "Fiji",
    "population": 900869
  },
  {
    "name": "Comoros",
    "population": 900141
  },
  {
    "name": "Bhutan",
    "population": 777224
  },
  {
    "name": "Guyana",
    "population": 772975
  },
  {
    "name": "Solomon Islands",
    "population": 750325
  },
  {
    "name": "Macau (China)",
    "population": 686600
  },
  {
    "name": "Luxembourg",
    "population": 672050
  },
  {
    "name": "Montenegro",
    "population": 623633
  },
  {
    "name": "Suriname",
    "population": 616500
  },
  {
    "name": "Western Sahara",
    "population": 590506
  },
  {
    "name": "Malta",
    "population": 542051
  },
  {
    "name": "Maldives",
    "population": 515132
  },
  {
    "name": "Cape Verde",
    "population": 491233
  },
  {
    "name": "Northern Cyprus",
    "population": 476214
  },
  {
    "name": "Brunei",
    "population": 450500
  },
  {
    "name": "Belize",
    "population": 410919
  },
  {
    "name": "Bahamas",
    "population": 398165
  },
  {
    "name": "Iceland",
    "population": 388790
  },
  {
    "name": "Transnistria",
    "population": 360938
  },
  {
    "name": "Vanuatu",
    "population": 321409
  },
  {
    "name": "French Polynesia (France)",
    "population": 279890
  },
  {
    "name": "New Caledonia (France)",
    "population": 268510
  },
  {
    "name": "Barbados",
    "population": 267800
  },
  {
    "name": "Abkhazia",
    "population": 244236
  },
  {
    "name": "São Tomé and Príncipe",
    "population": 228319
  },
  {
    "name": "Samoa",
    "population": 205557
  },
  {
    "name": "Saint Lucia",
    "population": 184100
  },
  {
    "name": "Curaçao (Netherlands)",
    "population": 155826
  },
  {
    "name": "Guam (US)",
    "population": 153836
  },
  {
    "name": "Seychelles",
    "population": 121355
  },
  {
    "name": "Kiribati",
    "population": 120740
  },
  {
    "name": "Grenada",
    "population": 112579
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "population": 110872
  },
  {
    "name": "Aruba (Netherlands)",
    "population": 107566
  },
  {
    "name": "Micronesia",
    "population": 105754
  },
  {
    "name": "Antigua and Barbuda",
    "population": 103603
  },
  {
    "name": "Jersey (UK)",
    "population": 103267
  },
  {
    "name": "Tonga",
    "population": 100179
  },
  {
    "name": "U.S. Virgin Islands (US)",
    "population": 87146
  },
  {
    "name": "Andorra",
    "population": 86801
  },
  {
    "name": "Cayman Islands (UK)",
    "population": 84738
  },
  {
    "name": "Isle of Man (UK)",
    "population": 84530
  },
  {
    "name": "Dominica",
    "population": 67408
  },
  {
    "name": "Guernsey (UK)",
    "population": 64781
  },
  {
    "name": "Bermuda (UK)",
    "population": 64055
  },
  {
    "name": "Greenland (Denmark)",
    "population": 56865
  },
  {
    "name": "South Ossetia",
    "population": 56520
  },
  {
    "name": "Faroe Islands (Denmark)",
    "population": 54668
  },
  {
    "name": "Saint Kitts and Nevis",
    "population": 51320
  },
  {
    "name": "American Samoa (US)",
    "population": 49710
  },
  {
    "name": "Turks and Caicos Islands (UK)",
    "population": 49309
  },
  {
    "name": "Northern Mariana Islands (US)",
    "population": 47329
  },
  {
    "name": "Marshall Islands",
    "population": 42418
  },
  {
    "name": "Sint Maarten (Netherlands)",
    "population": 41349
  },
  {
    "name": "Liechtenstein",
    "population": 40015
  },
  {
    "name": "Monaco",
    "population": 38367
  },
  {
    "name": "Gibraltar (UK)",
    "population": 34003
  },
  {
    "name": "San Marino",
    "population": 33987
  },
  {
    "name": "Saint Martin (France)",
    "population": 32358
  },
  {
    "name": "British Virgin Islands (UK)",
    "population": 31538
  },
  {
    "name": "Palau",
    "population": 16733
  },
  {
    "name": "Anguilla (UK)",
    "population": 15780
  },
  {
    "name": "Cook Islands",
    "population": 15040
  },
  {
    "name": "Nauru",
    "population": 11680
  },
  {
    "name": "Wallis and Futuna (France)",
    "population": 11620
  },
  {
    "name": "Tuvalu",
    "population": 10679
  },
  {
    "name": "Saint Barthélemy (France)",
    "population": 10585
  },
  {
    "name": "Saint Pierre and Miquelon (France)",
    "population": 6092
  },
  {
    "name": "\"Saint Helena",
    "population": null
  },
  {
    "name": "Montserrat (UK)",
    "population": 4386
  },
  {
    "name": "Falkland Islands (UK)",
    "population": 3662
  },
  {
    "name": "Norfolk Island (Australia)",
    "population": 2188
  },
  {
    "name": "Christmas Island (Australia)",
    "population": 1692
  },
  {
    "name": "Niue (New Zealand)",
    "population": 1681
  },
  {
    "name": "Tokelau (New Zealand)",
    "population": 1647
  },
  {
    "name": "Vatican City",
    "population": 764
  },
  {
    "name": "Cocos (Keeling) Islands (Australia)",
    "population": 593
  },
  {
    "name": "Pitcairn Islands (UK)",
    "population": 35
  }
];