var Items = null;
var fileSystemHelper = new FileSystemHelper();


function init() {
	document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
	$.ajax({
		dataType: "json",
		url: "http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1",
		beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
		complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner
		success: function(data) {
			fileSystemHelper.deleteFile('json.txt', _onSuccessD, _onError);
			console.log('_onSuccessAjax');
			fileSystemHelper.writeLine( 'json.txt', JSON.stringify(data), _onSuccessW, _onError );
			showList();
		}
	});
}


function _onSuccessW(value) { 
	//console.log('_onSuccessW'+value);
}
function _onSuccessD(value) {
	console.log('_onSuccessD'+value);
}

function _onSuccessR(value) {
	//$('#status').html('read');
	//$('#status').html(value);
	//console.log('_onSuccessR'+value);
	Items = jQuery.parseJSON(value);
	$.each(Items, function (i, item) {
		//console.log(i + " - " + item.name);
		$('#campingplatzelist').append('<li><a href="#campingplaetzedetails-page?id=' + i + '"><img src="data:image/jpg;base64,' + item.image + '" /><h1>' + item.name + '</h1><p>' + item.address + '</p></a></li>');
	});
	$("#campingplatzelist").listview("refresh");
	
	
}

function _onError(error) {
	//$('#status').html('error: '+error);
	console.log('_onError');
}

function showList() {
	//$('#status').html('value1');
	//fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessR, _onError);
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