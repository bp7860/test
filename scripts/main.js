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
		$('#campingplatzelist').append('<li><a href="#campingplaetzedetails-page?id=' + i + '"><img src="data:image/jpg;base64,' + item.image + '" /><h1>' + item.name + '</h1><p>' + item.address + '</p></a></li>');
	});
	$("#campingplatzelist").listview("refresh");
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

		// Kontakt
		var col = '<b>' + item.name + '</b><br/>' + item.address + '<br/>' + item.zip + '<br/>' + item.country + '<br/><br/>' +
			'Tel. <a href="tel:' + item.phone + '">' + item.phone + '</a><br/>Fax. ' + item.fax + '<br/>e-Mail <a href="mailto:' + item.email + '">' + item.email + '</a><br/><a href="http://' + item.www + '" target="_blank">' + item.www + '</a>';
		$content.find("#col-kontakt > p").html(col);

		// ausstattung
		var tmp = '';
		$.each(item.equipment, function (key, val) {
			tmp+='<img src="data:image/jpg;base64,' + val + '" /> ';
		});
		$content.find("#col-equipment > p").html(tmp);

		$content.find("#col-note > p").html(item.description);


		$content.find("#map > p").html('<a href="https://maps.google.at/maps?q=' + item.lat + ',' + item.lng + '(' + item.name.split(' ').join('+') + ')&num=1&z=17" rel="external" target="_blank">Google Map</a>');

		//$content.find("#prices > tbody").html('');

		var price = '<table>'+
			'<tr><td>Erwachsene:</td><td>' + outputString(item.adult_price) + '&nbsp;&euro;</td><td>' + outputString(item.adult_info) + '</td></tr>'+
			'<tr><td>Kinder:</td><td>' + outputString(item.kids_price) + '&nbsp;&euro;</td><td>' + outputString(item.kids_info) + '</td></tr>'+
			'<tr><td>Auto:</td><td>' + outputString(item.car_price) + '&nbsp;&euro;</td><td>' + outputString(item.car_info) + '</td></tr>'+
			'<tr><td>Wohnanhänger:</td><td>' + outputString(item.camper_price) + '&nbsp;&euro;</td><td>' + outputString(item.camper_info) + '</td></tr>'+
			'<tr><td>Wohnmobil:</td><td>' + outputString(item.caravan_price) + '&nbsp;&euro;</td><td>' + outputString(item.caravan_info) + '</td></tr>'+
			'<tr><td>großes Zelt:</td><td>' + outputString(item.marquee_price) + '&nbsp;&euro;</td><td>' + outputString(item.marquee_info) + '</td></tr>'+
			'<tr><td>Zelt:</td><td>' + outputString(item.tent_price) + '&nbsp;&euro; ' + outputString(item.tent_info) + '</td></tr>'+
			'<tr><td>Motorrad:</td><td>' + outputString(item.motorbike_price) + '&nbsp;&euro;</td><td>' + outputString(item.motorbike_info) + '</td></tr>'+
			'<tr><td>Hunde:</td><td>' + outputString(item.dogs_price) + '&nbsp;&euro;</td><td>' + outputString(item.dogs_info) + '</td></tr>'+
			'<tr><td>Strom:</td><td>' + outputString(item.electricity_price) + '&nbsp;&euro;</td><td>' + outputString(item.electricity_info) + '</td></tr>'+
		'</table>';

		$content.find("#col-price > p").html(price);



		$content.find("#images > p").html("");
		$.each(item.impressions, function (key, val) {
			//li ='<div class="ui-block-'+(key%2==0?'a':'b')+'"><a href="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'"><img src="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'" /></a></div>';
			li = '<img width="100%" src="data:image/jpg;base64,' + val + '" /><br />';
			$content.find("#images > p").append(li);
		});

		//$('a[data-tab][class="ui-btn-active"]').trigger("click");
		$('#info_tab').trigger("click");

		options.dataUrl = urlObj.href;
		$.mobile.changePage($page, options);
	}
}

function outputString(val) {
	return typeof val === 'undefined' ? '' : val;
}