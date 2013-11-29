//NOTE: Cordova File api has some issues with file reading in iOS 6
document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {
	var fileApp = new FileApp();

	fileApp._readTextFromFile();
	
	$.ajax({
		dataType: "json",
		url: "res/full.json",
		beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
		complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner
		success: function(data) {
			Data = data;

			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFSW, fail);

		//console.log( jQuery.parseJSON(localStorage.getItem("campingplaete")) );
		showList();
		}
	});

    navigator.splashscreen.hide();
	
	fileApp.run();
}

function FileApp() {
}

FileApp.prototype = {
	fileSystemHelper: null,
	fileNameField: null,
	textField: null,
	fileName: null,
     
	run: function() {
		var that = this,
    		writeFileButton = document.getElementById("writeFileButton"),
    		readFileButton = document.getElementById("readFileButton"),
    		deleteFileButton = document.getElementById("deleteFileButton");
        
		that.fileNameField = document.getElementById("fileNameInput");
		that.textField = document.getElementById("textInput");
        
		writeFileButton.addEventListener("click",
										 function() { 
											 that._writeTextToFile.call(that); 
										 });
        
		readFileButton.addEventListener("click",
										function() {
											that._readTextFromFile.call(that);
										});
        
		deleteFileButton.addEventListener("click",
										  function() {
											  that._deleteFile.call(that)
										  });
        
		fileSystemHelper = new FileSystemHelper();
	},
    
	_deleteFile: function () {
		var that = this,
		    fileName = that.fileNameField.value;
        
		if (that._isValidFileName(fileName)) {
			fileSystemHelper.deleteFile(fileName, that._onSuccess, that._onError);
		}
		else {
			var error = { code: 44, message: "Invalid filename"};
			that._onError(error);
		}
	},
    
	_readTextFromFile: function() {
		var that = this,
		    fileName = that.fileNameField.value;
        
		if (that._isValidFileName(fileName)) {
			fileSystemHelper.readTextFromFile(fileName, that._onSuccess, that._onError);
		}
		else {
			var error = { code: 44, message: "Invalid filename"};
			that._onError(error);
		}
	},
    
	_writeTextToFile: function() {
		var that = this,
    		fileName = that.fileNameField.value,
    		text = that.textField.value;

		if (that._isValidFileName(fileName)) {
			fileSystemHelper.writeLine(fileName, text, that._onSuccess, that._onError)
		}
		else {
			var error = { code: 44, message: "Invalid filename"};
			that._onError(error);
		}
	},
    
	_onSuccess: function(value) {
		var notificationBox = document.getElementById("result");
		notificationBox.innerText = value;
	},
    
	_onError: function(error) {

		var errorCodeDiv = document.createElement("div"),
    		errorMessageDiv = document.createElement("div"),
    		notificationBox = document.getElementById("result");

		errorCodeDiv.innerText = "Error code: " + error.code;
		errorMessageDiv.innerText = "Message: " + error.message;
        
		notificationBox.innerHTML = "";
		notificationBox.appendChild(errorCodeDiv);
		notificationBox.appendChild(errorMessageDiv);
	},
    
	_isValidFileName: function(fileName) {
		//var patternFileName = /^[\w]+\.[\w]{1,5}$/;

		return fileName.length > 2;
	}
}