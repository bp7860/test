
var Items = null;
var fileSystemHelper = new FileSystemHelper();

//NOTE: Cordova File api has some issues with file reading in iOS 6
document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {
	console.log('onDeviceReady');
	readFileButton.addEventListener("click",
		function() {
			fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessR, _onError );
		});
		fileSystemHelper.writeLine( 'json.txt', 'test', _onSuccessW, _onError );

	
}

function _onSuccessAjax(data) {
	
	fileSystemHelper.writeLine( 'json.txt', 'test', _onSuccessW, _onError );
}	

function _onSuccessW(value) {
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
	console.log('_onError'+error);
}

function showList() {
	//$('#status').html('value1');
	//fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessR, _onError);

}


