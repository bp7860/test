//NOTE: Cordova File api has some issues with file reading in iOS 6
document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {
	$('status2').html('Ready');
   fileSystemHelper.writeLine('readme.txt', 'text1', 
   	function() {$('status').html('Geschrieben');}, function() {});

   navigator.notification.alert(
        'test',  // message
        alertDismissed,         // callback
    );

   window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
   			$('status').html($('status').html()+fs.root.fullPath);
            console.log("Root = " + fs.root.fullPath);
            var directoryReader = fs.root.createReader();
            directoryReader.readEntries(function(entries) {
                var i;
                for (i=0; i<entries.length; i++) {
                    console.log(entries[i].name);
                	$('status').html($('status').html()+entries[i].name);

                }
            }, function (error) {
                alert(error.code);
            })
       }, function (error) {
               alert(error.code);
       });
}