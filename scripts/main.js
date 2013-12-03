
var Items = null;
var fileSystemHelper = new FileSystemHelper();

//NOTE: Cordova File api has some issues with file reading in iOS 6
document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {
		// Online
		$.ajax({
			dataType: "json",
			url: "http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1",
			beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
			complete: function() { $.mobile.hidePageLoadingMsg(); }, //Hide spinner
			success: function(data) {
				_onSuccessAjax(data);
			}
		});

	
}

function _onSuccessAjax(data) {
	
	fileSystemHelper.writeLine( 'json.txt', 'test', _onSuccessW, _onError );
	$.mobile.hidePageLoadingMsg();
	showList();
	}

function _onSuccessW(value) {

}
function _onSuccessR(value) {
	$('#status').html(value);
	//Items = jQuery.parseJSON(value);
	
}
function _onError(error) {
	$('#status').html('error: '+error);
}

function showList() {
	$('#status').html('value1');
	fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessR, _onError);

}
