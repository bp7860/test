//NOTE: Cordova File api has some issues with file reading in iOS 6
document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {
	fileSystemHelper = new FileSystemHelper();
    navigator.splashscreen.hide();
	fileSystemHelper.writeLine( document.getElementById("fileNameInput").value, 'test', _onSuccess, _onError );

	fileSystemHelper.readTextFromFile( document.getElementById("fileNameInput").value, _onSuccess, _onError);
}

function _onSuccess(value) {
	var notificationBox = document.getElementById("result");
	notificationBox.innerText = value;
}
function _onError(error) {

}
