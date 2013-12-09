var Items = null;
var fileSystemHelper = new FileSystemHelper();


function init() {
	document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
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
			fileSystemHelper.deleteFile('json.txt', _onSuccessD, _onError);
			console.log('_onSuccessAjax');
			fileSystemHelper.writeLine( 'json.txt', JSON.stringify(data), _onSuccessW, _onError );
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
	//console.log($('#campingplatzelist').html());
}

function _onError(error) {
	console.log('_onError');
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

// Tabs
$('[data-role="navbar"] a').bind('click', function () {
	$('.tab-content').children().hide();
	$('#' + $(this).attr('data-tab')).show();
	$("html,body").animate({
		scrollTop: 0
	}, 500);
	$(this).addClass("ui-btn-active");
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

		// The markup we are going to inject into the content
		// area of the page.

		$content.find("h2").html(item.name);
		$content.find("#anfahrt").html('<a href="https://maps.google.at/maps?q=' + item.lat + ',' + item.lng + '(' + item.name.split(' ').join('+') + ')&num=1&z=17" rel="external" target="_blank">Anfahrt</a>');

		// Kontakt
		var col = '<b>' + item.name + '</b><br/>' + item.address + '<br/>' + item.zip + '<br/>' + item.country + '<br/><br/>' +
			'Tel. <a href="tel:' + item.phone + '">' + item.phone + '</a><br/>Fax. ' + item.fax + '<br/>e-Mail <a href="mailto:' + item.email + '">' + item.email + '</a><br/><a href="http://' + item.www + '" target="_blank">' + item.www + '</a>';
		$content.find("#col-kontakt > p").html("");
		$content.find("#col-kontakt > p").html(col).trigger("create");

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

		//$('a[data-tab][class="ui-btn-active"]').trigger("click");
		$('#info_tab').trigger("click");

		options.dataUrl = urlObj.href;

		$('#campingplaetzedetails-page').find('[data-role="content"]').trigger('create');


		$.mobile.changePage($page, options);
		console.log('item select');
	}
}