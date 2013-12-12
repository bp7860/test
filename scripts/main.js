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
					"Moto", "Cani", "Corrente", "Home", "Servizio", "Dettagli", "Informazioni legali", "Partner", "altri servizi", "Aggiornamento", "Arrivo" )
	);


function init() {
	document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
	language = navigator.language.split("-"); 
    language_root = (language[0]);

    if( language_root == "en" )
    	Lang = 1;
    else if( language_root == "it" )
    	Lang = 3;

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
			equipment_tmp+='<img src="data:image/jpg;base64,' + val + '" /> ';
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
		'		<p><b>' + item.name + '</b><br/>' + item.address + '<br/>' + item.zip + '<br/>' + item.country + '<br/><br/>' +
			'Tel. <a href="tel:' + item.phone + '">' + item.phone + '</a><br/>Fax. ' + item.fax + '<br/>e-Mail <a href="mailto:' + item.email + '">' + item.email + '</a><br/><a href="http://' + item.www + '" target="_blank">' + item.www + '</a><br /><br /></p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-equipment"-->'+
		'		<div class="header_text">'+_l[Lang][3]+'</div>'+
		'		<p>'+equipment_tmp+'<br /><a href="#legende-page" data-icon="home">Legende</a><br /><br /></p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-note"-->'+
		'		<div class="header_text">'+_l[Lang][4]+'</div>'+
		'		<p>'+item.description[Lang]+'<br /><br /></p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-price"-->'+
		'		<div class="header_text">'+_l[Lang][5]+'</div>'+
		'		<p>'+
		'			<table>'+
		'				<tr><td>'+_l[Lang][6]+':</td><td>' + item.adult_price + 	'&nbsp;&euro;'+ (item.adult_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.adult_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.adult_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][7]+':</td><td>' + item.kids_price + 			'&nbsp;&euro;'+ (item.kids_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.kids_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.kids_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][8]+':</td><td>' + item.car_price + 			'&nbsp;&euro;'+ (item.car_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.car_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.car_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][9]+':</td><td>' + item.camper_price + 	'&nbsp;&euro;'+ (item.camper_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.camper_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.camper_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][10]+':</td><td>' + item.caravan_price + 	'&nbsp;&euro;'+ (item.caravan_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.caravan_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.caravan_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][11]+':</td><td>' + item.marquee_price + 	'&nbsp;&euro;'+ (item.marquee_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.marquee_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.marquee_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][12]+':</td><td>' + item.tent_price + 			'&nbsp;&euro;'+ (item.tent_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.tent_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.tent_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][13]+':</td><td>' + item.motorbike_price + 	'&nbsp;&euro;'+ (item.motorbike_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.motorbike_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.motorbike_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][14]+':</td><td>' + item.dogs_price + 			'&nbsp;&euro;'+ (item.dogs_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.dogs_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.dogs_info + '</td></tr>'+
		'				<tr><td>'+_l[Lang][15]+':</td><td>' + item.electricity_price + 	'&nbsp;&euro;'+ (item.electricity_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.electricity_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.electricity_info + '</td></tr>'+
		'			</table><br /><br />'+
		'		</p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-kontakt"-->'+
		'		<div class="header_text">'+_l[Lang][6]+'</div>'+
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