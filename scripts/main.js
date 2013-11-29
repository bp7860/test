//NOTE: Cordova File api has some issues with file reading in iOS 6
document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {}, false);

var fileName = 'camp.data';
var Items = null;

function onDeviceReady() {
	
	$.ajax({
		dataType: "json",
		url: "res/full.json",
			//beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
			//complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner
			success: function(data) {
				Data = data;
				Items = jQuery.parseJSON(data);
				//window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFSW, fail);
				//fileSystemHelper.writeLine(fileName, data, function() {}, function() {})

			//console.log( jQuery.parseJSON(localStorage.getItem("campingplaete")) );
			showList();
		}
	});

	//navigator.splashscreen.hide();
}

function showList() {
	//var json = jQuery.parseJSON(localStorage.getItem("campingplaete"));
	//window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFSR, fail);
	//console.log( localStorage.getItem("campingplaete") );
	//console.log( jQuery.parseJSON(localStorage.getItem("campingplaete")) );


	$.each(Items, function (i, item) {
		//console.log(i + " - " + item.name);
		$('#campingplatzelist').append('<li><a href="#campingplaetzedetails-page?id=' + i + '"><img src="data:image/jpg;base64,' + item.image + '" /><h1>' + item.name + '</h1><p>' + item.address + '</p></a></li>');
	});
	$("#campingplatzelist").listview("refresh");

}

onDeviceReady();