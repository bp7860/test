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


var area = new Array(
	new Array( 
		"Bozen (265 m), die Landeshauptstadt von Südtirol, ist eine Stadt mit zwei Gesichtern; unitalienisch herb für die Leute aus dem Süden und mediterran für den, der aus dem Norden kommt. In unmittelbarer Reichweite umgeben die Stadt verschiedene Höhenzüge: der Ritten mit seinen Erdpyramiden und schmucken Gasthäusern, Jenesien am Tschöggelberg und der Kohlererberg (älteste Seilbahn der Welt), als nahe Ausflugsziele. Nahe ist auch das originelle Sarntal, bekannt nicht nur für seine Trachten, sondern auch für die Federkielstickereien. In Bozen fand auch der Mann aus dem Eis \"Ötzi\" im Archäologiemuseum seine letzte Ruhestätte.",
		"Hier werden alle wichtigen Angelegenheiten bei einem \"Glasl guten Wein\" ausgemacht. Die Sonne erweckt eine reiche Vielfalt in dieser üppigen Obst- und Weinlandschaft, denn große zusammenhängende Obstanbauflächen und eine seit Jahrhunderten gepflegte Weinkultur bestimmen das Bild dieses Landstriches. Direkt an der Weinstraße liegt der Kalterer See, der als Ursprungsort des weltbekannten Weines gilt. Nicht nur bei den Weinbauern, sondern auch in den herrschaftlichen Ansitzen kann man sich verwöhnen lassen.",
		"Südöstlich von Etsch- und Eisacktal erhebt sich das \"Land der Berge\", wie die Dolomiten mit ihrer reichen vielfältigen Naturlandschaft im Volksmund genannt werden. Dolomiten: aus den Urmeeren entstanden - traumhafte Märchenarchitektur - bizarre Wände; beschrieben, abgebildet und besungen; erfahrbar, erkletterbar und belebt. Nirgendwo sonst gibt es so viele Naturparks. Viele Sagen, Bräuche und Traditionen sprechen ihre eigene Sprache, aber alle erzählen von der faszinierenden Welt der \"bleichen Berge\".",
		"",
		"Man befindet sich an der traditionellen Nord-Süd-Verbindung Südtiols und nicht nur der Handel, sondern auch die drei wichtigsten Ortschaften, wie das Fuggerstädtchen Sterzing, die ehemalige Bischofstadt Brixen und Klausen, einst berühmtes Künstlerdomizil, profitieren von dieser Lage. Aber abseits der historischen Transitstrecke zwischen Bozen und Brenner, bestimmen alte Einzelhöfe, Streusiedlungen und Weiler das Bild der urigen kleinen Seitentäler.",
		"Die Obst- und Reblandschaft, die subtropische Pflanzenwelt, die Promenaden und Waalwege und allen voran, das Stammschloß des Grafen von Tirol, haben schon seit eh und je Gäste in das Burgrafenamt gelockt. Den Erholungsbedürftigen bietet das Gebiet Gelegenheit, um Ruhe zu finden: in den kleinen Seitentälern, wie im Ultental mit seinen sonnenbraunen hölzernen Bauernhöfen, im Passeiertal, das einen alpinen Kleinkosmos mit hohen Paßstraßen aufzuweisen hat, Täler, die ihren vom bäuerlichen Leben geformten Charakter bewahrt haben.",
		"Nicht nur der \"Ötzi\", eine über 5000 Jahre alte Gletschermumie, am Similaun hoch über dem Schnalstal gefunden, sondern auch die Yaks (Himalaya-Rinder) des weltbekannten Extrembergsteigers Reinhold Messner sind einige der Kuriositäten, die im Vinschgau als Begegnungsort verschiedener Sprachen und Kulturen schlummern. Außerdem gibt es ein interessantes Wechselspiel zwischen einem warmen, südländischen Klima im unteren Vinschgau und einer hochalpinen Gebirgswelt (mit einigen Dreitausendern, wie dem Ortler) im oberen Teil."
	),
	new Array(

	),
	new Array(),
	new Array(

	),
	new Array(),
	new Array(),
	new Array(

	)
);
