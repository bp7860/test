var Items = null;
var Lang = 0;

var _l = new Array(
		new Array( "Information", "Kontakt", "Ausstattung", "Info", "Preise", "Impressionen", "Erwachsene", "Kinder", "Auto", "Wohnanhänger", "Wohnmobil", "großes Zelt", "Zelt",
					"Motorrad", "Hunde", "Strom", "Home", "Service", "Details", "Impressum", "Partner", "Weitere Services", "Update", "Anfahrt", "Region" ),
		new Array( "Information", "Contact", "Equipment", "Description", "Prices", "Impressions", "Adults", "Kids", "Car", "Caravan", "Camper", "Marquee", "Tent",
					"Motorbike", "Dog", "Electricity", "Home", "Service", "Details", "Imprint", "Partners", "More Services", "Update", "Map", "Region" ),
		new Array(),
		new Array( "Informazioni", "Contatto", "Attrezzatura", "Annotazione", "Prezzi", "Impressioni", "Adulti", "Bambini", "Macchina", "Caravan", "Camper", "Grande tenda", "Tenda",
					"Moto", "Cani", "Corrente", "Home", "Servizio", "Dettagli", "Informazioni legali", "Partner", "altri servizi", "Aggiornamento", "Arrivo", "Regione" ),
		new Array(),
		new Array(),
		new Array( "Informatie", "Contact", "Uitrusting", "Opmerking", "Prijzen", "Impressies", "Volwassenen", "Kinderen", "Auto", "Caravan", "Camper", "Grote tent", "Tent",
					"Motor", "Honden", "Stroom", "Home", "Service", "Details", "Impressum", "Partner", "Andere services", "Update", "Route", "Weer", "Verkeer", "Camping Südtirol", "Campingplaatsen", "Regio" )
	);
var legende = new Array(
		new Array("Gras oder Erdboden", "Wenig Schatten durch B&auml;ume", "Guter Schatten durch B&auml;ume", "Stromanschlu&szlig; f&uuml;r Caravans mit Voltangabe", "Einheiten (Caravans und Zelte)", "Duschen", "Gasversorgung", "Ausgu&szlig; f&uuml;r Chemikaltoiletten", "Trockenhaube", "Kinderspielplatz", "Beheizbare Sanit&auml;ranlagen", "Stromanschl&uuml;sse f&uuml;r Rassierapparat", "Geschirrsp&uuml;lbecken", "W&auml;schewaschbecken", "Platzbeleuchtung vorhanden", "Lebensmittel", "Imbiss", "Gastst&auml;tte", "Waschr&auml;ume nach Geschlechtern getrennt", "Tankstelle bei Camping", "Trockner", "Eislaufplatz", "Kunsteislaufplatz", "Toiletten mit Wassersp&uuml;lung", "Fu&szlig;waschbecken", "Skieinstellraum", "Seestrand", "Acc&egrave;s handicap&eacute;s", "Kinder-/Jugendzimmer", "Bibliothek", "Skilift", "Langlaufloipe", "Boccia", "Fitne&szlig;raum", "Bungalows oder Appartments", "Planschbecken", "Mietcaravan", "Minigolf", "Diskothek", "Kegelbahn", "Tischtennis", "Tennis", "Reitm&ouml;glichkeit", "Sauna", "Dampfbad", "Fernsehraum", "Solarium", "Whirlpool", "Waschmaschine", "Badegelegenheit auch f&uuml;r Kinder im offenen Gew&auml;sser", "Schwimmbecken", "Hallenbad", "Verleih von Ruderbooten der sonstigen Booten", "H&ouml;he &uuml;ber dem Meer", "Gesamtfl&auml;che", "Sanit&auml;rkabinen, die gemietet werden k&ouml;nnen", "Enteehrungsstation f&uuml;r Wohnmobil-Abwassertanks", "Entleehrung f&uuml;r Abwasser- und F&auml;kaltanks", "Gasanschl&uuml;sse", "Satelitenanlage", "Abwasser-/Frischwasseranschl&uuml;sse", "Imbisstube oder Imbissstand", "Umweltorientierte Betriebsf&uuml;hrung", "Internet", "&Ouml;ffentliche Verkehrsmittel in der N&auml;he", "Einzelwaschkabinen", "Campinplatz mit herausragendem Ergebnis bei der ADAC-Inspektion"),
		new Array("Grassy or bare ground", "A little shade from trees", "Well shaded by trees", "Elecricity with voltage indicatin for caravans", "No. of units (caravans and tent)", "Showers", "Gas connection", "Chemical cleset disposal point", "Electic Hairdryer", "Children Childr", "Sanitary block can be heated", "Electric razor points", "Washing-up facilities", "Laundry facilities", "Site can be iluminated", "Food-shop", "Snack bar", "Restaurant", "Seperate washrooms for men and women", "Petrol station near site", "Linen dryer", "Ice-skating rink", "Ice-skating rink", "Flush toilets", "Footsbaths", "Ski shed", "Beach on the lake", "Suitable for the handicapped", "Children Chi", "Library", "Lift facilities", "Cross-country ski track", "Boule", "Fitness room", "Bungalows or appartmnets", "Padding pool", "Rent-a-caravan", "Minigolf", "Discotheque", "Skittle allry", "Table-tennis", "Tennis", "Horseriding", "Sauna", "Steam bath", "TV room", "Solarium", "Whirlpool", "Washing machine", "Bathing (also for children) in open waters", "Swimming pool", "Indoor swimming pool", "Rowing and/or other boats for hire", "Altidude", "total area", "Sanitary cubicles available for rent", "Emptying facility for caravan and camper van sewage tanks", "Emptying facility for sewage and toilet tanks", "Gas connections", "Sat", "Sewage and drinking water connections", "Snack Bar", "Environmentally friendly operation", "Internet", "Public transport near", "Individual wash cabines", "Campsite was awarded excellency after ADAC inspection"),
		new Array(),
		new Array("Terreno erboso o terroso", "Poco ombreggiato dagli alberi Poco ombreggiato dagli alberi", "Ben ombreggiato dagli alberi Ben ombreggiato dagli alberi", "Presa elettrica per caravan con indicazione del voltaggio Presa elettrica per caravan con indicazione del voltaggio", "Capacità (caravan e tende) Capacità (caravan e tende)", "Docce Docce", "Bombole gas Bombole gas", "Scarico per WC chimico Scarico per WC chimico", "Asciugacapelli Asciugacapelli", "Campo giochi Campo giochi", "Servizi sanitari riscaldabili Servizi sanitari riscaldabili", "Presa corrente per rasoio Presa corrente per rasoio", "Lavello stoviglie Lavello stoviglie", "Lavatoio biancheria Lavatoio biancheria", "Posto illuminato a richiesta Posto illuminato a richiesta", "Vendita alimentari Vendita alimentari", "Bar Bar", "Ristorante Ristorante", "Lavatoi separati uomini/donne Lavatoi separati uomini/donne", "Distributore benzina vicino Distributore benzina vicino", "Centrifuga Centrifuga", "Pista di pattinaggio Pista di pattinaggio", "Stadio di pattinaggio artistico Stadio di pattinaggio artistico", "WC con acqua WC con acqua", "Acquaio per piedi Acquaio per piedi", "Deposito sci Deposito sci", "Spiaggia sul lago Spiaggia sul lago", "Senza barriere architettoniche Senza barriere architettoniche", "Sala per bambini/giovani Sala per bambini/giovani", "Biblioteca Biblioteca", "Skilift Skilift", "Pista di fondo Pista di fondo", "Bocce Bocce", "Sala fi tness Sala fi tness", "Bungalows o appartamenti Bungalows o appartamenti", "Piscina per bambini Piscina per bambini", "Affi to roulottes Affi to roulottes", "Minigolf Minigolf", "Discoteca Discoteca", "Pista dei birilli Pista dei birilli", "Ping pong Ping pong", "Tennis Tennis", "Equitazione Equitazione", "Sauna Sauna", "Bagno turco Bagno turco", "Sala TV Sala TV", "Solarium Solarium", "Whirlpool Whirlpool", "Lavatrice Lavatrice", "Possibilità di bagnarsi (per bambini) in acque aperte Possibilità di bagnarsi (per bambini) in acque aperte", "Piscina Piscina", "Piscina coperta Piscina coperta", "Noleggio barche a remi o di altro tipo Noleggio barche a remi o di altro tipo", "Altitudine Altitudine", "Area tot. Area tot.", "Cabine sanitarie in affi tto Cabine sanitarie in affi tto", "Stazione svuotamento serbatoi acque di scarico di roulottes Stazione svuotamento serbatoi acque di scarico di roulottes", "Stazione svuotamento serbatoi acque di scarico e fecali Stazione svuotamento serbatoi acque di scarico e fecali", "Allacciamenti gas Allacciamenti gas", "Sat Sat", "Allacciamenti acqua di scarico e acqua pulita Allacciamenti acqua di scarico e acqua pulita", "Snack bar o chiosco Snack bar o chiosco", "Gestione ecologica Gestione ecologica", "Internet Internet", "Fermata mezzi pubblici nelle immediate vicinanze Fermata mezzi pubblici nelle immediate vicinanze", "Cabine individuali Cabine individuali", "Campeggio con ottima valutazione ADAC Campeggio con ottima valutazione ADAC"),
		new Array(),
		new Array(),
		new Array("Terreno erboso o terroso", "Poco ombreggiato dagli alberi", "Ben ombreggiato dagli alberi", "Presa elettrica per caravan con indicazione del voltaggio", "Capacit&agrave; (caravan e tende)", "Docce", "Bombole gas", "Scarico per WC chimico", "Asciugacapelli", "Campo giochi", "Servizi sanitari riscaldabili", "Presa corrente per rasoio", "Lavello stoviglie", "Lavatoio biancheria", "Posto illuminato a richiesta", "Vendita alimentari", "Bar", "Ristorante", "Lavatoi separati uomini/donne", "Distributore benzina vicino", "Centrifuga", "Pista di pattinaggio", "Stadio di pattinaggio artistico", "WC con acqua", "Acquaio per piedi", "Deposito sci", "Spiaggia sul lago", "Senza barriere architettoniche", "Sala per bambini/giovani", "Biblioteca", "Skilift", "Pista di fondo", "Bocce", "Sala fi tness", "Bungalows o appartamenti", "Piscina per bambini", "Affi to roulottes", "Minigolf", "Discoteca", "Pista dei birilli", "Ping pong", "Tennis", "Equitazione", "Sauna", "Bagno turco", "Sala TV", "Solarium", "Whirlpool", "Lavatrice", "Possibilit&agrave; di bagnarsi (per bambini) in acque aperte", "Piscina", "Piscina coperta", "Noleggio barche a remi o di altro tipo", "Altitudine", "Area tot.", "Cabine sanitarie in affi tto", "Stazione svuotamento serbatoi acque di scarico di roulottes", "Stazione svuotamento serbatoi acque di scarico e fecali", "Allacciamenti gas", "Sat", "Allacciamenti acqua di scarico e acqua pulita", "Snack bar o chiosco", "Gestione ecologica", "Internet", "Fermata mezzi pubblici nelle immediate vicinanze", "Cabine individuali", "Campeggio con ottima valutazione ADAC")
	);

var area_list = new Array(
		"Bozen und Umgebung",
		"Der Süden Südtirols",
		"Dolomiten/Pustertal",
		"Eisacktal – Wipptal",
		"Meranerland",
		"Vinschgau"
	);

var area = new Array(
		new Array( 
			"Bozen (265 m), die Landeshauptstadt von Südtirol, ist eine Stadt mit zwei Gesichtern; unitalienisch herb für die Leute aus dem Süden und mediterran für den, der aus dem Norden kommt. In unmittelbarer Reichweite umgeben die Stadt verschiedene Höhenzüge: der Ritten mit seinen Erdpyramiden und schmucken Gasthäusern, Jenesien am Tschöggelberg und der Kohlererberg (älteste Seilbahn der Welt), als nahe Ausflugsziele. Nahe ist auch das originelle Sarntal, bekannt nicht nur für seine Trachten, sondern auch für die Federkielstickereien. In Bozen fand auch der Mann aus dem Eis \"Ötzi\" im Archäologiemuseum seine letzte Ruhestätte.",
			"Hier werden alle wichtigen Angelegenheiten bei einem \"Glasl guten Wein\" ausgemacht. Die Sonne erweckt eine reiche Vielfalt in dieser üppigen Obst- und Weinlandschaft, denn große zusammenhängende Obstanbauflächen und eine seit Jahrhunderten gepflegte Weinkultur bestimmen das Bild dieses Landstriches. Direkt an der Weinstraße liegt der Kalterer See, der als Ursprungsort des weltbekannten Weines gilt. Nicht nur bei den Weinbauern, sondern auch in den herrschaftlichen Ansitzen kann man sich verwöhnen lassen.",
			"Südöstlich von Etsch- und Eisacktal erhebt sich das \"Land der Berge\", wie die Dolomiten mit ihrer reichen vielfältigen Naturlandschaft im Volksmund genannt werden. Dolomiten: aus den Urmeeren entstanden - traumhafte Märchenarchitektur - bizarre Wände; beschrieben, abgebildet und besungen; erfahrbar, erkletterbar und belebt. Nirgendwo sonst gibt es so viele Naturparks. Viele Sagen, Bräuche und Traditionen sprechen ihre eigene Sprache, aber alle erzählen von der faszinierenden Welt der \"bleichen Berge\".",
			"",
			"Man befindet sich an der traditionellen Nord-Süd-Verbindung Südtiols und nicht nur der Handel, sondern auch die drei wichtigsten Ortschaften, wie das Fuggerstädtchen Sterzing, die ehemalige Bischofstadt Brixen und Klausen, einst berühmtes Künstlerdomizil, profitieren von dieser Lage. Aber abseits der historischen Transitstrecke zwischen Bozen und Brenner, bestimmen alte Einzelhöfe, Streusiedlungen und Weiler das Bild der urigen kleinen Seitentäler.",
			"Die Obst- und Reblandschaft, die subtropische Pflanzenwelt, die Promenaden und Waalwege und allen voran, das Stammschloß des Grafen von Tirol, haben schon seit eh und je Gäste in das Burgrafenamt gelockt. Den Erholungsbedürftigen bietet das Gebiet Gelegenheit, um Ruhe zu finden: in den kleinen Seitentälern, wie im Ultental mit seinen sonnenbraunen hölzernen Bauernhöfen, im Passeiertal, das einen alpinen Kleinkosmos mit hohen Paßstraßen aufzuweisen hat, Täler, die ihren vom bäuerlichen Leben geformten Charakter bewahrt haben.",
			"Nicht nur der \"Ötzi\", eine über 5000 Jahre alte Gletschermumie, am Similaun hoch über dem Schnalstal gefunden, sondern auch die Yaks (Himalaya-Rinder) des weltbekannten Extrembergsteigers Reinhold Messner sind einige der Kuriositäten, die im Vinschgau als Begegnungsort verschiedener Sprachen und Kulturen schlummern. Außerdem gibt es ein interessantes Wechselspiel zwischen einem warmen, südländischen Klima im unteren Vinschgau und einer hochalpinen Gebirgswelt (mit einigen Dreitausendern, wie dem Ortler) im oberen Teil."
		)
	);




function init() {
	document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
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



    /*
	navigator.notification.alert(
            language_root,  // message
            function(){},         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
       */
    //window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);
	//fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessRF, _onErrorRF );
	showList();
}

function alertDismissed() {
    // do something
}

function eq_popup( val ) {
	//$('#popupBasic_'+ id).show();
	navigator.notification.alert(
	    val,  // message
	    alertDismissed,         // callback
	    'Info',            // title
	    'OK'                  // buttonName
	);

}

function toggle() {
	if( $('#details_content_normal').is(":visible") ) {
		$('#details_content_normal').hide();
		$('#details_content_gmap').show();
	}
	else {
		$('#details_content_normal').show();
		$('#details_content_gmap').hide();
	}
}

function updateData(){
	console.log('updateData');
	/*
	$.ajax({
		dataType: "json",
		url: "http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1",
		beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
		complete: function() { $.mobile.hidePageLoadingMsg(); }, //Hide spinner
		success: function(data) {
			console.log('_onSuccessAjax');
			fileSystemHelper.deleteFile('json.txt', _onSuccessD, _onError);
			fileSystemHelper.writeLine( 'json.txt', JSON.stringify(data), _onSuccessW, _onError );
		},
		error: function(error) {
			console.log('ajax error: '+error);
		}
	});
	*/

	// !! Assumes filePath is a valid path on the device

	$.mobile.showPageLoadingMsg();

	App = new downloadApp(),
	App.run(encodeURI("http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1"), "json.txt");

	
}

function _onSuccessRF(value) {
	showList();
}

function _onErrorRF(value) {
	//if( device.platform == "iPhone" ) {
	navigator.notification.confirm(
        'Need to update Data', // message
         onConfirm            // callback to invoke with index of button pressed
    );
	//}
	//else
	//	showList();

}
function onConfirm(buttonIndex) {
    buttonIndex == 1 ? showList() : false;
}



function _onSuccessW(value) {
	showList();
}
function _onSuccessD(value) {
	console.log('_onSuccessD'+value);
}

function _onSuccessR(value) {

	Items = jQuery.parseJSON(value);
	$('#campingplatzelist').empty();
	$.each(Items, function (i, item) {
		$('#campingplatzelist').append('<li region_name="'+item.region_name+'"><a href="#campingplaetzedetails-page?id=' + i + '"><img src="data:image/jpg;base64,' + item.image + '" /><h1>' + item.name + '</h1><p>' + item.address + '</p></a></li>');
	});
	$.mobile.showPageLoadingMsg();
	$( "#campingplatzelist" ).listview({
		autodividers: true,

		// the selector function is passed a <li> element from the listview;
		// it should return the appropriate divider text for that <li>
		// element as a string
		autodividersSelector: function ( li ) {
			var out = li.attr('region_name');
			return out;
		}
	}).listview("refresh");
	$.mobile.hidePageLoadingMsg();
	//console.log($('#campingplatzelist').html());
}

function _onError(error) {
	console.log('_onError'+error);
}

function showList() {
	//fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessR, _onError );
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

// Listen for any attempts to call changePage().
$(document).bind("pagebeforechange", function (e, data) {

	// We only want to handle changePage() calls where the caller is
	// asking us to load a page by URL.
	if (typeof data.toPage === "string") {

		// We are being asked to load a page by URL, but we only
		// want to handle URLs that request the data for a specific
		// category.

		var u = $.mobile.path.parseUrl(data.toPage);
		var re = /^#campingplaetzedetails-page$/;

		//console.log(u.hash.search(re));

		if (u.hash.search(re) !== -1) {
			$.mobile.navigate("");
		}

		var u = $.mobile.path.parseUrl(data.toPage);
		var re = /^#campingplaetzedetails-page/;


		if (u.hash.search(re) !== -1) {

			// We're being asked to display the items for a specific category.
			// Call our internal method that builds the content for the category
			// on the fly based on our in-memory category data structure.
			showItem(u, data.options);
			

			// Make sure to tell changePage() we've handled this call so it doesn't
			// have to do anything.
			e.preventDefault();
		}
	}
});

$('#update').bind( "click", function(event, ui) {
	updateData();
});



function showItem(urlObj, options) {

	

	var itemID = urlObj.hash.replace(/.*id=/, "");


	item = Items[itemID];
	pageSelector = urlObj.hash.replace(/\?.*$/, "");

	if (item) {

		// Get the page we are going to dump our content into.
		var $page = $(pageSelector);

		// Get the header for the page.
		$header = $page.children(":jqmData(role=header)");

		// Get the content area element for the page.
		$content = $page.children(":jqmData(role=content)");

		// ausstattung
		var equipment_tmp = '';
		var equipment_msg = '';
		$.each(item.equipment, function (key, val) {
			//equipment_tmp+='<img src="data:image/jpg;base64,' + val + '" /> ';<div data-role="popup" id="popupBasic_'+ val +'"><p>' + legende[Lang][(val-1)] + '</p></div>
			grid = '';
			if( key%3 == 0 )
				grid = 'a';
			else if( key%3 == 1 )
				grid = 'b';
			else if( key%3 == 2 )
				grid = 'c';
			equipment_tmp+='<div class="ui-block-'+grid+'"><a href="javascript:eq_popup(\''+legende[Lang][(val[0]-1)] + val[1] +'\')"><img src="img/eq/' + val[0] + '.gif" /></a></div>';
		});

		// bilder
		var impressions_tmp = '';
		$.each(item.impressions, function (key, val) {
			//li ='<div class="ui-block-'+(key%2==0?'a':'b')+'"><a href="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'"><img src="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'" /></a></div>';
			impressions_tmp+= '<img width="100%" src="data:image/jpg;base64,' + val + '" /><br />';
		});

		var inhalt = '<h2>'+item.name+'</h2>'+
		'<div data-role="navbar">'+
		'<ul>'+
		( window.navigator.onLine ? '<li><a>'+_l[Lang][0]+'</a></li>' : '<li><a href="javascript:toggle();">'+_l[Lang][0]+'</a></li>' )+
		( window.navigator.onLine ? '<li id="anfahrt"><a href="https://maps.google.at/maps?q=' + item.lat + ',' + item.lng + '(' + item.name.split(' ').join('+') + ')&num=1&z=17" rel="external" target="_blank">'+_l[Lang][23]+'</a></li>' : '<li><a href="javascript:toggle();">'+_l[Lang][23]+'</a></li>')+
		'	</ul>'+
		'</div><br /><br />'+
		'<div id="details_content_normal">'+
		'<!--div data-role="collapsible-set"-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-kontakt"-->'+
		'		<div class="header_text">'+_l[Lang][1]+'</div>'+
		'		<p><center><img width="100%" src="data:image/jpg;base64,' + item.image + '" /></center><br /><b>' + item.name + '</b><br/>' + item.address + '<br/>' + item.zip + '<br/>' + item.city + '<br/><br/><br/>' +
			'Tel. <a href="tel:' + item.phone + '">' + item.phone + '</a><br/><br/>Fax. ' + item.fax + '<br/><br/>e-Mail <a href="mailto:' + item.email + '">' + item.email + '</a><br/><br/>www: <a href="http://' + item.www + '" target="_blank">' + item.www + '</a><br /><br /></p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-equipment"-->'+
		'		<div class="header_text">'+_l[Lang][2]+'</div>'+
		'		<p><div class="ui-grid-b">'+equipment_tmp+'</div></p>' +
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-note"-->'+
		'		<div class="header_text">'+_l[Lang][3]+'</div>'+
		'		<p>'+item.description[Lang]+'<br /><br /></p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-price"-->'+
		'		<div class="header_text">'+_l[Lang][4]+'</div>'+
		'		<p>'+
		'			<table>'+
		'				<tr><td><img src="img/adult.jpg" /></td><td align="right">' + item.adult_price + 	'&nbsp;&euro;'+ (item.adult_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.adult_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.adult_info + '</td></tr>'+
		'				<tr><td><img src="img/kids.jpg" /></td><td align="right">' + item.kids_price + 			'&nbsp;&euro;'+ (item.kids_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.kids_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.kids_info + '</td></tr>'+
		'				<tr><td><img src="img/car.jpg" /></td><td align="right">' + item.car_price + 			'&nbsp;&euro;'+ (item.car_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.car_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.car_info + '</td></tr>'+
		'				<tr><td><img src="img/camper.jpg" /></td><td align="right">' + item.camper_price + 	'&nbsp;&euro;'+ (item.camper_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.camper_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.camper_info + '</td></tr>'+
		'				<tr><td><img src="img/caravan.jpg" /></td><td align="right">' + item.caravan_price + 	'&nbsp;&euro;'+ (item.caravan_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.caravan_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.caravan_info + '</td></tr>'+
		'				<tr><td><img src="img/marquee.jpg" /></td><td align="right">' + item.marquee_price + 	'&nbsp;&euro;'+ (item.marquee_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.marquee_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.marquee_info + '</td></tr>'+
		'				<tr><td><img src="img/tent.jpg" /></td><td align="right">' + item.tent_price + 			'&nbsp;&euro;'+ (item.tent_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.tent_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.tent_info + '</td></tr>'+
		'				<tr><td><img src="img/motorbike.jpg" /></td><td align="right">' + item.motorbike_price + 	'&nbsp;&euro;'+ (item.motorbike_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.motorbike_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.motorbike_info + '</td></tr>'+
		'				<tr><td><img src="img/dog.jpg" /></td><td align="right">' + item.dogs_price + 			'&nbsp;&euro;'+ (item.dogs_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.dogs_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.dogs_info + '</td></tr>'+
		'				<tr><td><img src="img/electricity.jpg" /></td><td align="right">' + item.electricity_price + 	'&nbsp;&euro;'+ (item.electricity_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.electricity_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.electricity_info + '</td></tr>'+
		'			</table><br /><br />'+
		'		</p>'+
		'	<!--/div-->'+
		'		<div class="header_text">'+_l[Lang][24]+'</div>'+
		'		<p>'+area[Lang][(item.region_id-1)]+'</p>'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-kontakt"-->'+
		'		<div class="header_text">'+_l[Lang][5]+'</div>'+
		'		<p>'+impressions_tmp+'</p>'+
		'	<!--/div-->'+
		'<!--/div-->'+
		'</div>'+
		'<div id="details_content_gmap" style="display:none">'+
		'<img width="100%" src="data:image/png;base64,' + item.gmap_img + '" />'+
		'</div>';
		$content.empty().append(inhalt).trigger( "create" );

		options.dataUrl = urlObj.href;
		//$('#campingplaetzedetails-page').find('[data-role="content"]').trigger('create');
		$.mobile.changePage($page, options);
		

/*
		// The markup we are going to inject into the content
		// area of the page.

		$content.find("h2").html(item.name);
		$content.find("#anfahrt").html('<a href="https://maps.google.at/maps?q=' + item.lat + ',' + item.lng + '(' + item.name.split(' ').join('+') + ')&num=1&z=17" rel="external" target="_blank">Anfahrt</a>');

		// Kontakt
		var col = '<b>' + item.name + '</b><br/>' + item.address + '<br/>' + item.zip + '<br/>' + item.country + '<br/><br/>' +
			'Tel. <a href="tel:' + item.phone + '">' + item.phone + '</a><br/>Fax. ' + item.fax + '<br/>e-Mail <a href="mailto:' + item.email + '">' + item.email + '</a><br/><a href="http://' + item.www + '" target="_blank">' + item.www + '</a>';
		//$content.find("#col-kontakt > p").html("");
		$content.find("#col-kontakt > p").empty();
		//$content.find("#col-kontakt > p").html(col);
		$content.find("#col-kontakt > p").append(col);
		$content.find("#col-kontakt > p").trigger("create");

		
		// ausstattung
		var tmp = '';
		$.each(item.equipment, function (key, val) {
			tmp+='<img src="data:image/jpg;base64,' + val + '" /> ';
		});
		$content.find("#col-equipment > p").html("");
		$content.find("#col-equipment > p").html(tmp);

		// Beschreibung

		$content.find("#col-note > p").html(item.description);

		// Maps

		//$content.find("#map > p").html('<a href="https://maps.google.at/maps?q=' + item.lat + ',' + item.lng + '(' + item.name.split(' ').join('+') + ')&num=1&z=17" rel="external" target="_blank">Google Map</a>');


		// Preise
		$content.find("#col-price > p").html("");

		var price = '<table>'+
			'<tr><td>Erwachsene:</td><td>' + item.adult_price + 	'&nbsp;&euro;'+ (item.adult_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.adult_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.adult_info + '</td></tr>'+
			'<tr><td>Kinder:</td><td>' + item.kids_price + 			'&nbsp;&euro;'+ (item.kids_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.kids_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.kids_info + '</td></tr>'+
			'<tr><td>Auto:</td><td>' + item.car_price + 			'&nbsp;&euro;'+ (item.car_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.car_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.car_info + '</td></tr>'+
			'<tr><td>Wohnanhänger:</td><td>' + item.camper_price + 	'&nbsp;&euro;'+ (item.camper_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.camper_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.camper_info + '</td></tr>'+
			'<tr><td>Wohnmobil:</td><td>' + item.caravan_price + 	'&nbsp;&euro;'+ (item.caravan_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.caravan_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.caravan_info + '</td></tr>'+
			'<tr><td>großes Zelt:</td><td>' + item.marquee_price + 	'&nbsp;&euro;'+ (item.marquee_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.marquee_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.marquee_info + '</td></tr>'+
			'<tr><td>Zelt:</td><td>' + item.tent_price + 			'&nbsp;&euro;'+ (item.tent_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.tent_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.tent_info + '</td></tr>'+
			'<tr><td>Motorrad:</td><td>' + item.motorbike_price + 	'&nbsp;&euro;'+ (item.motorbike_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.motorbike_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.motorbike_info + '</td></tr>'+
			'<tr><td>Hunde:</td><td>' + item.dogs_price + 			'&nbsp;&euro;'+ (item.dogs_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.dogs_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.dogs_info + '</td></tr>'+
			'<tr><td>Strom:</td><td>' + item.electricity_price + 	'&nbsp;&euro;'+ (item.electricity_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.electricity_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.electricity_info + '</td></tr>'+
		'</table>';

		$content.find("#col-price > p").html(price);

		// Bilder

		$content.find("#images > p").html("");
		$.each(item.impressions, function (key, val) {
			//li ='<div class="ui-block-'+(key%2==0?'a':'b')+'"><a href="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'"><img src="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'" /></a></div>';
			li = '<img width="100%" src="data:image/jpg;base64,' + val + '" /><br />';
			$content.find("#images > p").append(li);
		});

		// Pages are lazily enhanced. We call page() on the page
		// element to make sure it is always enhanced before we
		// attempt to enhance the listview markup we just injected.
		// Subsequent calls to page() are ignored since a page/widget
		// can only be enhanced once.
		$('#info').trigger('create');

		//$('a[data-tab][class="ui-btn-active"]').trigger("click");
		$('#info_tab').trigger("click");
		*/
		console.log('item select');
	}
}


var downloadApp = function() {
}

downloadApp.prototype = {
	run: function(uri, fileName, folderName) {
		var that = this,
		filePath = "";
        
		that.getFilesystem(
			function(fileSystem) {
				console.log("gotFS");
				if (device.platform === "Android") {
					console.log("android");
					that.transferFile(uri, fileSystem.root.fullPath + "\/" + fileName);
					/*
					that.getFolder(fileSystem, folderName, function(folder) {
						filePath = folder.fullPath + "\/" + fileName;
						that.transferFile(uri, filePath);
						console.log("got filesystem");
					}, function() {
						console.log("failed to get folder");
					});
*/
				}
				else {
					console.log("no android");
					filePath = fileSystem.root.fullPath + "\/" + fileName;
					that.transferFile(uri, filePath)
				}
			},
			function() {
				console.log("failed to get filesystem");
			}
		);

	},
    
	getFilesystem:function (success, fail) {
        //check whether we're in Simulator
		if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
			alert("Not Supported in Simulator.");
		}
		else {
			window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, success, fail);
		}
	},

	getFolder: function (fileSystem, folderName, success, fail) {
		fileSystem.root.getDirectory(folderName, {create: true, exclusive: false}, success, fail)
	},

	transferFile: function (uri, filePath) {
		console.log("transfer start");
		var transfer = new FileTransfer();
		transfer.download(
			uri,
			filePath,
			function(entry) {
				$.mobile.hidePageLoadingMsg();
				//window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
				showList();
			},
			function(error) {
				$.mobile.hidePageLoadingMsg();
                //document.getElementById("result").innerHTML = "An error has occurred: Code = " + error.code;
				console.log("download error source " + error.source);
				console.log("download error target " + error.target);
				console.log("upload error code" + error.code);
				alert('Error. Please try again later');
			}
		);
		console.log("transfer end");
	}
}

// Read FileTransfer
function gotFS(fileSystem) {
	console.log(fileSystem.root.fullPath);
    fileSystem.root.getFile("json.txt", {create: false, exclusive: false}, gotFileEntry, _onErrorRF);
}
function gotFileEntry(fileEntry) {
	fileEntry.file(gotFile, fail);
}
function gotFile(file){
	readAsText(file);
}
function readAsText(file) {
	var reader = new FileReader();
	reader.onloadend = function(evt) {
		console.log("Read as text");
		_onSuccessR(evt.target.result);
	};
	reader.readAsText(file);
}
function fail(evt) {
    console.log();
}