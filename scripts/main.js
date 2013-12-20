var Items = null;
var fileSystemHelper = new FileSystemHelper();
var Lang = 0;

var _l = new Array(
		new Array( "Information", "Kontakt", "Ausstattung", "Anmerkung", "Preise", "Impressionen", "Erwachsene", "Kinder", "Auto", "Wohnanhänger", "Wohnmobil", "großes Zelt", "Zelt",
					"Motorrad", "Hunde", "Strom", "Home", "Service", "Details", "Impressum", "Partner", "Weitere Services", "Update", "Anfahrt" ),
		new Array( "Information", "Contact", "Equipment", "Description", "Prices", "Impressions", "Adults", "Kids", "Car", "Caravan", "Camper", "Marquee", "Tent",
					"Motorbike", "Dog", "Electricity", "Home", "Service", "Details", "Imprint", "Partners", "More Services", "Update", "Map" ),
		new Array(),
		new Array( "Informazioni", "Contatto", "Attrezzatura", "Annotazione", "Prezzi", "Impressioni", "Adulti", "Bambini", "Macchina", "Caravan", "Camper", "Grande tenda", "Tenda",
					"Moto", "Cani", "Corrente", "Home", "Servizio", "Dettagli", "Informazioni legali", "Partner", "altri servizi", "Aggiornamento", "Arrivo" ),
		new Array(),
		new Array(),
		new Array( "Informatie", "Contact", "Uitrusting", "Opmerking", "Prijzen", "Impressies", "Volwassenen", "Kinderen", "Auto", "Caravan", "Camper", "Grote tent", "Tent",
					"Motor", "Honden", "Stroom", "Home", "Service", "Details", "Impressum", "Partner", "Andere services", "Update", "Route", "Weer", "Verkeer", "Camping Südtirol", "Campingplaatsen")
	);
var legende = new Array(
		new Array("Gras oder Erdboden", "Wenig Schatten durch Bäume Wenig Schatten durch Bäume", "Guter Schatten durch Bäume Guter Schatten durch Bäume", "Stromanschluß für Caravans mit Voltangabe Stromanschluß für Caravans mit Voltangabe", "Einheiten (Caravans und Zelte) Einheiten (Caravans und Zelte)", "Duschen Duschen", "Gasversorgung Gasversorgung", "Ausguß für Chemikaltoiletten Ausguß für Chemikaltoiletten", "Trockenhaube Trockenhaube", "Kinderspielplatz Kinderspielplatz", "Beheizbare Sanitäranlagen Beheizbare Sanitäranlagen", "Stromanschlüsse für Rassierapparat Stromanschlüsse für Rassierapparat", "Geschirrspülbecken Geschirrspülbecken", "Wäschewaschbecken Wäschewaschbecken", "Platzbeleuchtung vorhanden Platzbeleuchtung vorhanden", "Lebensmittel Lebensmittel", "Imbiss Imbiss", "Gaststätte Gaststätte", "Waschräume nach Geschlechtern getrennt Waschräume nach Geschlechtern getrennt", "Tankstelle bei Camping Tankstelle bei Camping", "Trockner Trockner", "Eislaufplatz Eislaufplatz", "Kunsteislaufplatz Kunsteislaufplatz", "Toiletten mit Wasserspülung Toiletten mit Wasserspülung", "Fußwaschbecken Fußwaschbecken", "Skieinstellraum Skieinstellraum", "Seestrand Seestrand", "Accès handicapés Accès handicapés", "Kinder-/Jugendzimmer Kinder-/Jugendzimmer", "Bibliothek Bibliothek", "Skilift Skilift", "Langlaufloipe Langlaufloipe", "Boccia Boccia", "Fitneßraum Fitneßraum", "Bungalows oder Appartments Bungalows oder Appartments", "Planschbecken Planschbecken", "Mietcaravan Mietcaravan", "Minigolf Minigolf", "Diskothek Diskothek", "Kegelbahn Kegelbahn", "Tischtennis Tischtennis", "Tennis Tennis", "Reitmöglichkeit Reitmöglichkeit", "Sauna Sauna", "Dampfbad Dampfbad", "Fernsehraum Fernsehraum", "Solarium Solarium", "Whirlpool Whirlpool", "Waschmaschine Waschmaschine", "Badegelegenheit auch für Kinder im offenen Gewässer Badegelegenheit auch für Kinder im offenen Gewässer", "Schwimmbecken Schwimmbecken", "Hallenbad Hallenbad", "Verleih von Ruderbooten der sonstigen Booten Verleih von Ruderbooten der sonstigen Booten", "Höhe über dem Meer Höhe über dem Meer", "Gesamtfläche Gesamtfläche", "Sanitärkabinen, die gemietet werden können Sanitärkabinen, die gemietet werden können", "Enteehrungsstation für Wohnmobil-Abwassertanks Enteehrungsstation für Wohnmobil-Abwassertanks", "Entleehrung für Abwasser- und Fäkaltanks Entleehrung für Abwasser- und Fäkaltanks", "Gasanschlüsse Gasanschlüsse", "Satelitenanlage Satelitenanlage", "Abwasser-/Frischwasseranschlüsse Abwasser-/Frischwasseranschlüsse", "Imbisstube oder Imbissstand Imbisstube oder Imbissstand", "Umweltorientierte Betriebsführung Umweltorientierte Betriebsführung", "Internet Internet", "Öffentliche Verkehrsmittel in der Nähe Öffentliche Verkehrsmittel in der Nähe", "Einzelwaschkabinen Einzelwaschkabinen", "Campinplatz mit herausragendem Ergebnis bei der ADAC-Inspektion Campinplatz mit herausragendem Ergebnis bei der ADAC-Inspektion"),
		new Array("Grassy or bare ground", "A little shade from trees A little shade from trees", "Well shaded by trees Well shaded by trees", "Elecricity with voltage indicatin for caravans Elecricity with voltage indicatin for caravans", "No. of units (caravans and tent) No. of units (caravans and tent)", "Showers Showers", "Gas connection Gas connection", "Chemical cleset disposal point Chemical cleset disposal point", "Electic Hairdryer Electic Hairdryer", "Children Children's playground", "Sanitary block can be heated Sanitary block can be heated", "Electric razor points Electric razor points", "Washing-up facilities Washing-up facilities", "Laundry facilities Laundry facilities", "Site can be iluminated Site can be iluminated", "Food-shop Food-shop", "Snack bar Snack bar", "Restaurant Restaurant", "Seperate washrooms for men and women Seperate washrooms for men and women", "Petrol station near site Petrol station near site", "Linen dryer Linen dryer", "Ice-skating rink Ice-skating rink", "Ice-skating rink Ice-skating rink", "Flush toilets Flush toilets", "Footsbaths Footsbaths", "Ski shed Ski shed", "Beach on the lake Beach on the lake", "Suitable for the handicapped Suitable for the handicapped", "Children Children's room", "Library Library", "Lift facilities Lift facilities", "Cross-country ski track Cross-country ski track", "Boule Boule", "Fitness room Fitness room", "Bungalows or appartmnets Bungalows or appartmnets", "Padding pool Padding pool", "Rent-a-caravan Rent-a-caravan", "Minigolf Minigolf", "Discotheque Discotheque", "Skittle allry Skittle allry", "Table-tennis Table-tennis", "Tennis Tennis", "Horseriding Horseriding", "Sauna Sauna", "Steam bath Steam bath", "TV room TV room", "Solarium Solarium", "Whirlpool Whirlpool", "Washing machine Washing machine", "Bathing (also for children) in open waters Bathing (also for children) in open waters", "Swimming pool Swimming pool", "Indoor swimming pool Indoor swimming pool", "Rowing and/or other boats for hire Rowing and/or other boats for hire", "Altidude Altidude", "total area total area", "Sanitary cubicles available for rent Sanitary cubicles available for rent", "Emptying facility for caravan and camper van sewage tanks Emptying facility for caravan and camper van sewage tanks", "Emptying facility for sewage and toilet tanks Emptying facility for sewage and toilet tanks", "Gas connections Gas connections", "Sat Sat", "Sewage and drinking water connections Sewage and drinking water connections", "Snack Bar Snack Bar", "Environmentally friendly operation Environmentally friendly operation", "Internet Internet", "Public transport near Public transport near", "Individual wash cabines Individual wash cabines", "Campsite was awarded excellency after ADAC inspection Campsite was awarded excellency after ADAC inspection"),
		new Array(),
		new Array("Terreno erboso o terroso", "Poco ombreggiato dagli alberi Poco ombreggiato dagli alberi", "Ben ombreggiato dagli alberi Ben ombreggiato dagli alberi", "Presa elettrica per caravan con indicazione del voltaggio Presa elettrica per caravan con indicazione del voltaggio", "Capacità (caravan e tende) Capacità (caravan e tende)", "Docce Docce", "Bombole gas Bombole gas", "Scarico per WC chimico Scarico per WC chimico", "Asciugacapelli Asciugacapelli", "Campo giochi Campo giochi", "Servizi sanitari riscaldabili Servizi sanitari riscaldabili", "Presa corrente per rasoio Presa corrente per rasoio", "Lavello stoviglie Lavello stoviglie", "Lavatoio biancheria Lavatoio biancheria", "Posto illuminato a richiesta Posto illuminato a richiesta", "Vendita alimentari Vendita alimentari", "Bar Bar", "Ristorante Ristorante", "Lavatoi separati uomini/donne Lavatoi separati uomini/donne", "Distributore benzina vicino Distributore benzina vicino", "Centrifuga Centrifuga", "Pista di pattinaggio Pista di pattinaggio", "Stadio di pattinaggio artistico Stadio di pattinaggio artistico", "WC con acqua WC con acqua", "Acquaio per piedi Acquaio per piedi", "Deposito sci Deposito sci", "Spiaggia sul lago Spiaggia sul lago", "Senza barriere architettoniche Senza barriere architettoniche", "Sala per bambini/giovani Sala per bambini/giovani", "Biblioteca Biblioteca", "Skilift Skilift", "Pista di fondo Pista di fondo", "Bocce Bocce", "Sala fi tness Sala fi tness", "Bungalows o appartamenti Bungalows o appartamenti", "Piscina per bambini Piscina per bambini", "Affi to roulottes Affi to roulottes", "Minigolf Minigolf", "Discoteca Discoteca", "Pista dei birilli Pista dei birilli", "Ping pong Ping pong", "Tennis Tennis", "Equitazione Equitazione", "Sauna Sauna", "Bagno turco Bagno turco", "Sala TV Sala TV", "Solarium Solarium", "Whirlpool Whirlpool", "Lavatrice Lavatrice", "Possibilità di bagnarsi (per bambini) in acque aperte Possibilità di bagnarsi (per bambini) in acque aperte", "Piscina Piscina", "Piscina coperta Piscina coperta", "Noleggio barche a remi o di altro tipo Noleggio barche a remi o di altro tipo", "Altitudine Altitudine", "Area tot. Area tot.", "Cabine sanitarie in affi tto Cabine sanitarie in affi tto", "Stazione svuotamento serbatoi acque di scarico di roulottes Stazione svuotamento serbatoi acque di scarico di roulottes", "Stazione svuotamento serbatoi acque di scarico e fecali Stazione svuotamento serbatoi acque di scarico e fecali", "Allacciamenti gas Allacciamenti gas", "Sat Sat", "Allacciamenti acqua di scarico e acqua pulita Allacciamenti acqua di scarico e acqua pulita", "Snack bar o chiosco Snack bar o chiosco", "Gestione ecologica Gestione ecologica", "Internet Internet", "Fermata mezzi pubblici nelle immediate vicinanze Fermata mezzi pubblici nelle immediate vicinanze", "Cabine individuali Cabine individuali", "Campeggio con ottima valutazione ADAC Campeggio con ottima valutazione ADAC"),
		new Array(),
		new Array(),
		new Array("Gras of harde grond", "Weinig schaduw van bomen Weinig schaduw van bomen", "Veel schaduw van bomen Veel schaduw van bomen", "Stroomaansluiting met indicatie van voltage voor caravans Stroomaansluiting met indicatie van voltage voor caravans", "Eenheden (caravans en tenten) Eenheden (caravans en tenten)", "Douches Douches", "Gas verzorging Gas verzorging", "Stortplaats chemische toiletten Stortplaats chemische toiletten", "Haardroger Haardroger", "Kinderspeelplaats Kinderspeelplaats", "Verwarmde sanitaire voorzieningen Verwarmde sanitaire voorzieningen", "Stroomaansluiting voor elektrisch scheerapparaat Stroomaansluiting voor elektrisch scheerapparaat", "Afwasgelegenheid Afwasgelegenheid", "Handwasgelegenheid Handwasgelegenheid", "Staanplaatsen kunnen worden verlicht Staanplaatsen kunnen worden verlicht", "Levensmiddelen Levensmiddelen", "Bar Bar", "Restaurant Restaurant", "Gescheiden wasgelegenheden Gescheiden wasgelegenheden", "Tankstation bij de camping Tankstation bij de camping", "Droger Droger", "IJsbaan IJsbaan", "Kunstijsbaan Kunstijsbaan", "Toiletten met waterspoeling Toiletten met waterspoeling", "Voetenwasbak Voetenwasbak", "Bergruimte voor ski’s Bergruimte voor ski’s", "Strand aan het meer Strand aan het meer", "Toegankelijk voor gehandicapten Toegankelijk voor gehandicapten", "Kinderkamerr Kinderkamerr", "Bibliotheek Bibliotheek", "Skilift Skilift", "Langlaufl oipe Langlaufl oipe", "Jeu de boules Jeu de boules", "Fitnessruimte Fitnessruimte", "Bungalows of appartementen Bungalows of appartementen", "Kinderbad Kinderbad", "Caravan verhuur Caravan verhuur", "Minigolf Minigolf", "Discotheek Discotheek", "Kegelbaan Kegelbaan", "Tafeltennis Tafeltennis", "Tennis Tennis", "Paardrijden Paardrijden", "Sauna Sauna", "Turks bad Turks bad", "TV kamer TV kamer", "Solarium Solarium", "Whirlpool Whirlpool", "Wasserette Wasserette", "Zwemgelegenheid in open water (voor kinderen) Zwemgelegenheid in open water (voor kinderen)", "Zwembad Zwembad", "Overdekt zwembad Overdekt zwembad", "Verhuur van roeiboten of andere boten Verhuur van roeiboten of andere boten", "Hoogte Hoogte", "Oppervlakte Oppervlakte", "Verhuur van sanitaire cabines Verhuur van sanitaire cabines", "Mogelijkheid om afvoerwatertanks van campers en caravans te legen Mogelijkheid om afvoerwatertanks van campers en caravans te legen", "Emptying facility for sewage and toilet tanks Emptying facility for sewage and toilet tanks", "Gasaansluiting Gasaansluiting", "Sat Sat", "Afvoer- en drinkwater aansluitingen Afvoer- en drinkwater aansluitingen", "Snack bar Snack bar", "Milieuvriendelijke bedrijfsvoering Milieuvriendelijke bedrijfsvoering", "Internet Internet", "Openbaar vervoer vlakbij Openbaar vervoer vlakbij", "Individuele wascabines Individuele wascabines", "Campingplaats met zeer goede ADAC waardering Campingplaats met zeer goede ADAC waardering"),

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
	fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessRF, _onErrorRF );
}

function updateData(){
	console.log('updateData');
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
}

function _onSuccessRF(value) {
	showList();
}

function _onErrorRF(value) {
	updateData();
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
	fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessR, _onError );
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
		$.each(item.equipment, function (key, val) {
			//equipment_tmp+='<img src="data:image/jpg;base64,' + val + '" /> ';
			equipment_tmp+='<img src="img/eq/' + val + '" /> '+legende[Lang][val-1]+'<br>';
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
		'		<li><a data-tab="info" class="ui-btn-active" id="info_tab">'+_l[Lang][0]+'</a></li>'+
		'		<!--li><a data-tab="images">'+_l[Lang][5]+'</a></li-->'+
		'		<li id="anfahrt"><a href="https://maps.google.at/maps?q=' + item.lat + ',' + item.lng + '(' + item.name.split(' ').join('+') + ')&num=1&z=17" rel="external" target="_blank">'+_l[Lang][23]+'</a></li>'+
		'	</ul>'+
		'</div><br /><br />'+
		'<!--div data-role="collapsible-set"-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-kontakt"-->'+
		'		<div class="header_text">'+_l[Lang][1]+'</div>'+
		'		<p><b>' + item.name + '</b><br/>' + item.address + '<br/>' + item.zip + '<br/>' + item.city + '<br/><br/><br/>' +
			'Tel. <a href="tel:' + item.phone + '">' + item.phone + '</a><br/><br/>Fax. ' + item.fax + '<br/><br/>e-Mail <a href="mailto:' + item.email + '">' + item.email + '</a><br/><br/><a href="http://' + item.www + '" target="_blank">' + item.www + '</a><br /><br /></p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-equipment"-->'+
		'		<div class="header_text">'+_l[Lang][2]+'</div>'+
		'		<p>'+equipment_tmp+'<br /><a href="#legende-page" data-icon="home">Legende</a><br /><br /></p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-note"-->'+
		'		<div class="header_text">'+_l[Lang][3]+'</div>'+
		'		<p>'+item.description[Lang]+'<br /><br /></p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-price"-->'+
		'		<div class="header_text">'+_l[Lang][4]+'</div>'+
		'		<p>'+
		'			<table>'+
		'				<tr><td>'+_l[Lang][6]+':</td><td align="right">' + item.adult_price + 	'&nbsp;&euro;'+ (item.adult_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.adult_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.adult_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][7]+':</td><td align="right">' + item.kids_price + 			'&nbsp;&euro;'+ (item.kids_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.kids_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.kids_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][8]+':</td><td align="right">' + item.car_price + 			'&nbsp;&euro;'+ (item.car_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.car_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.car_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][9]+':</td><td align="right">' + item.camper_price + 	'&nbsp;&euro;'+ (item.camper_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.camper_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.camper_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][10]+':</td><td align="right">' + item.caravan_price + 	'&nbsp;&euro;'+ (item.caravan_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.caravan_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.caravan_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][11]+':</td><td align="right">' + item.marquee_price + 	'&nbsp;&euro;'+ (item.marquee_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.marquee_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.marquee_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][12]+':</td><td align="right">' + item.tent_price + 			'&nbsp;&euro;'+ (item.tent_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.tent_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.tent_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][13]+':</td><td align="right">' + item.motorbike_price + 	'&nbsp;&euro;'+ (item.motorbike_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.motorbike_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.motorbike_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][14]+':</td><td align="right">' + item.dogs_price + 			'&nbsp;&euro;'+ (item.dogs_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.dogs_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.dogs_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][15]+':</td><td align="right">' + item.electricity_price + 	'&nbsp;&euro;'+ (item.electricity_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.electricity_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.electricity_info + '</td></tr>'+
		'			</table><br /><br />'+
		'		</p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-kontakt"-->'+
		'		<div class="header_text">'+_l[Lang][5]+'</div>'+
		'		<p>'+impressions_tmp+'</p>'+
		'	<!--/div-->'+
		'<!--/div-->';
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