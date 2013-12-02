// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function gotFS(fileSystem) {
	fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {
	fileEntry.createWriter(gotFileWriter, fail);
}

function gotFileWriter(writer) {
	writer.onwriteend = function(evt) {
		console.log("contents of file now 'some sample text'");
		writer.truncate(11);  
		writer.onwriteend = function(evt) {
			console.log("contents of file now 'some sample'");
			writer.seek(4);
			writer.write(" different text");
			writer.onwriteend = function(evt){
				console.log("contents of file now 'some different text'");
			}
		};
	};
	writer.write("some sample text");
}

function fail(error) {
	console.log(error.code);
}




// Wait for Cordova to load
//
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

// Cordova is ready
//
function onDeviceReady() {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function gotFS(fileSystem) {
	fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {
	fileEntry.file(gotFile, fail);
}

function gotFile(file){
	readDataUrl(file);
	readAsText(file);
}

function readDataUrl(file) {
	var reader = new FileReader();
	reader.onloadend = function(evt) {
		console.log("Read as data URL");
		console.log(evt.target.result);
	};
	reader.readAsDataURL(file);
}

function readAsText(file) {
	var reader = new FileReader();
	reader.onloadend = function(evt) {
		console.log("Read as text");
		console.log(evt.target.result);
	};
	reader.readAsText(file);
}

function fail(evt) {
	console.log(evt.target.error.code);
}