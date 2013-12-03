var Items = null;
var fileSystemHelper = new FileSystemHelper();


function init() {
	document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
	$.ajax({
		dataType: "json",
		url: "http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1",
		success: function(data) {
			fileSystemHelper.deleteFile('json.txt', _onSuccessD, _onError);
			console.log('_onSuccessAjax');
			fileSystemHelper.writeLine( 'json.txt', 'test', _onSuccessW, _onError );
			showList();
		}
	});
}


function _onSuccessW(value) {
	console.log('_onSuccessW'+value);
}
function _onSuccessD(value) {
	console.log('_onSuccessW'+value);
}

function _onSuccessR(value) {
	//$('#status').html('read');
	//$('#status').html(value);
	console.log('_onSuccessR'+value);
	//Items = jQuery.parseJSON(value);
	
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


