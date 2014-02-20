var Lang = 0;

var _l = new Array(
	new Array( "Information", "Kontakt", "Ausstattung", "Info", "Preise", "Impressionen", "Erwachsene", "Kinder", "Auto", "Wohnanhänger", "Wohnmobil", "großes Zelt", "Zelt",
		"Motorrad", "Hunde", "Strom", "Home", "Service", "Details", "Impressum", "Partner", "Weitere Services", "Update", "Anfahrt", "Region", "Verkehr", "Camping Südtirol", "Campingplatz", "Wetter", "Film" ),

	new Array( "Information", "Contact", "Equipment", "Description", "Prices", "Impressions", "Adults", "Kids", "Car", "Caravan", "Camper", "Marquee", "Tent",
		"Motorbike", "Dog", "Electricity", "Home", "Service", "Details", "Imprint", "Partners", "More Services", "Update", "Map", "Region", "Traffic", "Camping South Tyrol", "Campsite", "Weather", "Movie" ),
	new Array(),
	new Array( "Informazioni", "Contatto", "Attrezzatura", "Annotazione", "Prezzi", "Impressioni", "Adulti", "Bambini", "Macchina", "Caravan", "Camper", "Grande tenda", "Tenda",
		"Moto", "Cani", "Corrente", "Home", "Servizio", "Dettagli", "Informazioni legali", "Partner", "Altri servizi", "Aggiornamento", "Arrivo", "Regione", "Traffico", "Camping Alto Adige", "Campeggio", "Meteo", "Film" ),
	new Array(),
	new Array(),
	new Array( "Informatie", "Contact", "Uitrusting", "Opmerking", "Prijzen", "Impressies", "Volwassenen", "Kinderen", "Auto", "Caravan", "Camper", "Grote tent", "Tent",
		"Motor", "Honden", "Stroom", "Home", "Service", "Details", "Impressum", "Partner", "Andere services", "Update", "Route", "Regio", "Verkeer", "Camping Südtirol", "Campingplaatsen", "Weer", "Film" )
	);

if( localStorage.getItem("lang") === null ) {
	language = navigator.language.split("-"); 
	language_root = (language[0]);

	if( language_root == "en" )
		Lang = 1;
	else if( language_root == "it" )
		Lang = 3;
	else if( language_root == "nl" )
		Lang = 6;

	localStorage.setItem( "lang", Lang );
}
else {
	Lang = localStorage.getItem("lang");
}

/* Translate */
if( Lang != 0 ) {
	$('#lng_camping').html(_l[Lang][27]);
	$('#lng_campingsuedtirol').html(_l[Lang][26]);
	$('#lng_home').html(_l[Lang][16]);
	$('#lng_service').html(_l[Lang][17]);
	$('#lng_details').html(_l[Lang][18]);
	$('#lng_back').html(_l[Lang][18]);
	$('#lng_impressum').html(_l[Lang][5]);
	$('#lng_partner').html(_l[Lang][20]);
	$('#lng_moreservices').html(_l[Lang][21]);
	$('#lng_wetter').html(_l[Lang][28]);
	$('#lng_verkehr').html(_l[Lang][25]);
	$('#lng_film').html(_l[Lang][29]);
}
