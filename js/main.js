//var jsonString = '[   {      "name":"Camping Bungalows Adler",      "adresse":"Lidostraße 14",      "image":"http://www.campingsuedtirol.com/uploads/tx_wccamping/Camping_Via_Claudia_Augusta.jpg"   },   {      "name":"Camping Caravan Park Sexten",      "adresse":"St.-Josef-Str. 54<br\/>39030<br\/>Sexten\/Moos<br\/>Italy",      "image":"http://www.campingsuedtirol.com/uploads/tx_wccamping/Alpinfitness_Waldcamping_02.jpg"   }]';
//var json = jQuery.parseJSON( jsonString );
//var json = JSON.parse(jsonString);
//localStorage.setItem("campingplaete", JSON.stringify(json));
// Load the data for a specific category, based on
// the URL passed in. Generate markup for the items in the
// category, inject it into an embedded page, and then make
// that page the current active page.
function showItem(urlObj, options) {
	Items = jQuery.parseJSON(localStorage.getItem("campingplaete"));
	var itemID = urlObj.hash.replace(/.*id=/, "");

	// Get the object that represents the category we
	// are interested in. Note, that at this point we could
	// instead fire off an ajax request to fetch the data, but
	// for the purposes of this sample, it's already in memory.
	item = Items[itemID];

	// The pages we use to display our content are already in
	// the DOM. The id of the page we are going to write our
	// content into is specified in the hash before the '?'.
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
		var col = '<b>'+item.name+'</b><br/>'+item.address+'<br/>'+item.zip+'<br/>'+item.country+'<br/><br/>'+
		'Tel. <a href="tel:'+item.phone+'">'+item.phone+'</a><br/>Fax. '+item.fax+'<br/>e-Mail <a href="mailto:'+item.email+'">'+item.email+'</a><br/><a href="'+item.www+'">'+item.www+'</a>';
		$content.find("#col-kontakt > p").html(col);

		// ausstattung
		$content.find("#col-equipment > p").html(item.equipment.join( " " ));

		$content.find("#col-note > p").html(item.description);


		// ausstattung
		//$content.find("#map > p").html('<a href="https://maps.google.at/maps?q='+item.lat+'+'+item.lng+'" target="_blank">Google Maps</a>');
		//$content.find("#map > p").html('<div id="map_canvas" class="map"></div>');

		$content.find("#images > p").html("");
		$.each( item.impressions, function( key, val ) {
			//li ='<div class="ui-block-'+(key%2==0?'a':'b')+'"><a href="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'"><img src="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'" /></a></div>';
			li ='<img width="100%" src="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'" /><br />';
			$content.find("#images > p").append(li);
		});

		//$content.find("#gallery").append();
		//$("#gallery a").photoSwipe(); //- See more at: http://www.photoswipe.com/#sthash.7HILKRne.dpuf
		//photoSwipeInstance = $("ul#gallery a").photoSwipe({});

		// Inject the category items markup into the content element.
		//$content.html(markup);

		// Pages are lazily enhanced. We call page() on the page
		// element to make sure it is always enhanced before we
		// attempt to enhance the listview markup we just injected.
		// Subsequent calls to page() are ignored since a page/widget
		// can only be enhanced once.
		//$page.page();

		// Enhance the listview we just injected.
		//$content.find(":jqmData(role=listview)").listview();

		// We don't want the data-url of the page we just modified
		// to be the url that shows up in the browser's location field,
		// so set the dataUrl option to the URL for the category
		// we just loaded.
		options.dataUrl = urlObj.href;

		// Now call changePage() and tell it to switch to
		// the page we just modified.
		$.mobile.changePage($page, options);
	}
}

function showList() {
	var json = jQuery.parseJSON(localStorage.getItem("campingplaete"));
	//console.log( localStorage.getItem("campingplaete") );
	//console.log( jQuery.parseJSON(localStorage.getItem("campingplaete")) );

	$.each(json, function (i, item) {
		//console.log(i + " - " + item.name);
		$('#campingplatzelist').append('<li><a href="#campingplaetzedetails-page?id=' + i + '">' + item.image + '<h1>' + item.name + '</h1><p>' + item.address + '</p></a></li>');
	});
	$("#campingplatzelist").listview("refresh");

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

		console.log(u.hash.search(re));

		if (u.hash.search(re) !== -1) {
			$.mobile.navigate("");
		}

		var u = $.mobile.path.parseUrl(data.toPage);
		var re = /^#campingplaetzedetails-page/;

		console.log(u.hash.search(re));

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

/*
$('#home').bind("pageinit", function (e, data) {
	$("#campingplatzelist").listview("refresh");
});
*/

$(document).ready(function () {


	if (navigator.onLine) {
		// Online
		

		var jqxhr = $.getJSON("http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1", function (data) {
			localStorage.clear();
			localStorage.setItem("campingplaete", JSON.stringify(data));
			//console.log( jQuery.parseJSON(localStorage.getItem("campingplaete")) );
			showList();
			
		})
		.fail(function () {
			console.log("error json load");
		});

	}
	else {
		showList();
	}

	/* Check localstorage
	if (Modernizr.localstorage) {
		//$( "#storageerror-link" ).trigger( "click" );
	} else {
		//$( "#popupLocalStorage" ).popup( "open" );
	}*/




	
	
	// Tabs
	$('[data-role="navbar"] a').bind('click', function () {
		console.log("clicked");
		//$('[data-role="navbar"] a').removeClass("ui-btn-active");
		$('.tab-content').children().hide();
		//console.log($('.tab-content').html());
		$('#' + $(this).attr('data-tab')).show();
		$("html,body").animate({
			scrollTop: 0
		}, 500);
		$(this).addClass("ui-btn-active");
		//var height = ($(window).height() - $(pageSelector).find('[data-role="header"]').height() - $(pageSelector).find('[data-role="footer"]').outerHeight());
		//console.log("height: "+$(window).height()+"header:"+$(pageSelector).children(":jqmData(role=header)").height()+"footer:"+$(pageSelector).find('[data-role="footer"]').height());
		//console.log("height: "+$(window).height()+"header:"+$(pageSelector).children(":jqmData(role=header)").height()+"footer:"+$(pageSelector).find('[data-role="footer"]').height());
		//console.log("height: "+($(window).outerHeight()-$(pageSelector).children(":jqmData(role=header)").outerHeight()-$(pageSelector).find('[data-role="footer"]').outerHeight()));
	});

	$('a[data-tab][class="ui-btn-active"]').trigger("click");

	// Set the variable $width to the width of our wrapper on page load
	


});

// Google Map