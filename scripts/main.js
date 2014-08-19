var Items = null;



function init() {
	document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {



    /*
	navigator.notification.alert(
            language_root,  // message
            function(){},         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
       */
    //window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);
	//fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessRF, _onErrorRF );
	showList();
}

function alertDismissed() {
    // do something
}

function eq_popup( val ) {
	//$('#popupBasic_'+ id).show();
	navigator.notification.alert(
	    val,  // message
	    alertDismissed,         // callback
	    'Info',            // title
	    'OK'                  // buttonName
	);

}

function toggle() {
	if( $('#details_content_normal').is(":visible") ) {
		$('#details_content_normal').hide();
		$('#details_content_gmap').show();
	}
	else {
		$('#details_content_normal').show();
		$('#details_content_gmap').hide();
	}
}

function updateData(){
	console.log('updateData');
	/*
	$.ajax({
		dataType: "json",
		url: "http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1",
		beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
		complete: function() { $.mobile.hidePageLoadingMsg(); }, //Hide spinner
		success: function(data) {
			console.log('_onSuccessAjax');
			fileSystemHelper.deleteFile('json.txt', _onSuccessD, _onError);
			fileSystemHelper.writeLine( 'json.txt', JSON.stringify(data), _onSuccessW, _onError );
		},
		error: function(error) {
			console.log('ajax error: '+error);
		}
	});
	*/

	// !! Assumes filePath is a valid path on the device

	$.mobile.showPageLoadingMsg();

	App = new downloadApp(),
	App.run(encodeURI("http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1"), "json.txt");

	
}

function _onSuccessRF(value) {
	showList();
}

function _onErrorRF(value) {
	
	/*if( device.platform == "iPhone" || device.platform == "iOS" ) {
		navigator.notification.confirm(
	        'Data update required', // message
	         onConfirm            // callback to invoke with index of button pressed
	    );
	}
	else*/
	updateData();

}
function onConfirm(buttonIndex) {
    buttonIndex == 1 ? updateData() : false;
}



function _onSuccessW(value) {
	showList();
}
function _onSuccessD(value) {
	console.log('_onSuccessD'+value);
}

function _onSuccessR(value) {

	Items = jQuery.parseJSON(value);
	$('#campingplatzelist').empty();
	$.each(Items, function (i, item) {
		$('#campingplatzelist').append('<li region_name="'+area_list[Lang][item.region_id]+'"><a href="#campingplaetzedetails-page?id=' + i + '"><img src="data:image/jpg;base64,' + item.image + '" /><h1>' + item.name + '</h1><p>' + item.address + '</p></a></li>');
	});
	$.mobile.showPageLoadingMsg();
	$( "#campingplatzelist" ).listview({
		autodividers: true,

		// the selector function is passed a <li> element from the listview;
		// it should return the appropriate divider text for that <li>
		// element as a string
		autodividersSelector: function ( li ) {
			var out = li.attr('region_name');
			return out;
		}
	}).listview("refresh");
	$.mobile.hidePageLoadingMsg();
	//console.log($('#campingplatzelist').html());
}

function _onError(error) {
	console.log('_onError'+error);
}

function showList() {
	//fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessR, _onError );
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
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

$('#update').bind( "click", function(event, ui) {
	updateData();
});



function showItem(urlObj, options) {

	console.log('showitem');

	

	var itemID = urlObj.hash.replace(/.*id=/, "");


	item = Items[itemID];
	pageSelector = urlObj.hash.replace(/\?.*$/, "");

	if (item) {

		// Get the page we are going to dump our content into.
		$page = $(pageSelector);

		// Get the header for the page.
		$header = $page.children(":jqmData(role=header)");

		// Get the content area element for the page.
		$content = $page.children(":jqmData(role=content)");

		// ausstattung
		var equipment_tmp = '';
		var equipment_msg = '';
		$.each(item.equipment, function (key, val) {
			//equipment_tmp+='<img src="data:image/jpg;base64,' + val + '" /> ';<div data-role="popup" id="popupBasic_'+ val +'"><p>' + legende[Lang][(val-1)] + '</p></div>
			grid = '';
			if( key%3 == 0 )
				grid = 'a';
			else if( key%3 == 1 )
				grid = 'b';
			else if( key%3 == 2 )
				grid = 'c';
			equipment_tmp+='<div class="ui-block-'+grid+'"><a href="javascript:eq_popup(\''+legende[Lang][(val[0]-1)] + val[1] +'\')"><img src="img/eq/' + val[0] + '.gif" /></a></div>';
		});

		// bilder
		var impressions_tmp = '';
		$.each(item.impressions, function (key, val) {
			//li ='<div class="ui-block-'+(key%2==0?'a':'b')+'"><a href="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'"><img src="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'" /></a></div>';
			impressions_tmp+= '<img width="100%" src="data:image/jpg;base64,' + val + '" /><br />';
		});

		var inhalt = '<h2>'+item.name+'</h2>'+
		'<div data-role="navbar">'+
		'<ul>'+
		( window.navigator.onLine ? '<li><a>'+_l[Lang][0]+'</a></li>' : '<li><a href="javascript:toggle();">'+_l[Lang][0]+'</a></li>' )+
		( window.navigator.onLine ? '<li id="anfahrt"><a href="https://maps.google.at/maps?q=' + item.lat + ',' + item.lng + '(' + item.name.split(' ').join('+') + ')&num=1&z=17" rel="external" target="_blank">'+_l[Lang][23]+'</a></li>' : '<li><a href="javascript:toggle();">'+_l[Lang][23]+'</a></li>')+
		'	</ul>'+
		'</div><br /><br />'+
		'<div id="details_content_normal">'+
		'<!--div data-role="collapsible-set"-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-kontakt"-->'+
		'		<div class="header_text">'+_l[Lang][1]+'</div>'+
		'		<p><center><img width="100%" src="data:image/jpg;base64,' + item.image + '" /></center><br /><b>' + item.name + '</b><br/>' + item.address + '<br/>' + item.zip + '<br/>' + item.city + '<br/><br/><br/>' +
			'Tel. <a href="tel:' + item.phone + '">' + item.phone + '</a><br/><br/>Fax. ' + item.fax + '<br/><br/>e-Mail <a href="mailto:' + item.email + '">' + item.email + '</a><br/><br/>www: <a href="http://' + item.www + '" target="_blank">' + item.www + '</a><br /><br /></p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-equipment"-->'+
		'		<div class="header_text">'+_l[Lang][2]+'</div>'+
		'		<p><div class="ui-grid-b">'+equipment_tmp+'</div></p>' +
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-note"-->'+
		'		<div class="header_text">'+_l[Lang][3]+'</div>'+
		'		<p>'+item.description[Lang]+'<br /><br /></p>'+
		'	<!--/div-->'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-price"-->'+
		'		<div class="header_text">'+_l[Lang][4]+'</div>'+
		'		<p>'+
		'			<table>'+
		'				<tr><td><img src="img/adult.jpg" /></td><td align="right">' + item.adult_price + 	'&nbsp;&euro;'+ (item.adult_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.adult_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.adult_info + '</td></tr>'+
		'				<tr><td><img src="img/kids.jpg" /></td><td align="right">' + item.kids_price + 			'&nbsp;&euro;'+ (item.kids_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.kids_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.kids_info + '</td></tr>'+
		'				<tr><td><img src="img/car.jpg" /></td><td align="right">' + item.car_price + 			'&nbsp;&euro;'+ (item.car_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.car_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.car_info + '</td></tr>'+
		'				<tr><td><img src="img/camper.jpg" /></td><td align="right">' + item.camper_price + 	'&nbsp;&euro;'+ (item.camper_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.camper_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.camper_info + '</td></tr>'+
		'				<tr><td><img src="img/caravan.jpg" /></td><td align="right">' + item.caravan_price + 	'&nbsp;&euro;'+ (item.caravan_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.caravan_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.caravan_info + '</td></tr>'+
		'				<tr><td><img src="img/marquee.jpg" /></td><td align="right">' + item.marquee_price + 	'&nbsp;&euro;'+ (item.marquee_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.marquee_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.marquee_info + '</td></tr>'+
		'				<tr><td><img src="img/tent.jpg" /></td><td align="right">' + item.tent_price + 			'&nbsp;&euro;'+ (item.tent_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.tent_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.tent_info + '</td></tr>'+
		'				<tr><td><img src="img/motorbike.jpg" /></td><td align="right">' + item.motorbike_price + 	'&nbsp;&euro;'+ (item.motorbike_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.motorbike_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.motorbike_info + '</td></tr>'+
		'				<tr><td><img src="img/dog.jpg" /></td><td align="right">' + item.dogs_price + 			'&nbsp;&euro;'+ (item.dogs_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.dogs_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.dogs_info + '</td></tr>'+
		'				<tr><td><img src="img/electricity.jpg" /></td><td align="right">' + item.electricity_price + 	'&nbsp;&euro;'+ (item.electricity_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.electricity_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.electricity_info + '</td></tr>'+
		'			</table><br /><br />'+
		'		</p>'+
		'	<!--/div-->'+
		'		<div class="header_text">'+_l[Lang][24]+'</div>'+
		'		<p>'+area[Lang][(item.region_id-1)]+'</p>'+
		'	<!--div data-role="collapsible" data-mini="true" id="col-kontakt"-->'+
		'		<div class="header_text">'+_l[Lang][5]+'</div>'+
		'		<p>'+impressions_tmp+'</p>'+
		'	<!--/div-->'+
		'<!--/div-->'+
		'</div>'+
		'<div id="details_content_gmap" style="display:none">'+
		'<img width="100%" src="data:image/png;base64,' + item.gmap_img + '" />'+
		'</div>';
		$content.empty().append(inhalt).trigger( "create" );

		options.dataUrl = urlObj.href;
		//$('#campingplaetzedetails-page').find('[data-role="content"]').trigger('create');
		$.mobile.changePage($page, options);
		

/*
		// The markup we are going to inject into the content
		// area of the page.

		$content.find("h2").html(item.name);
		$content.find("#anfahrt").html('<a href="https://maps.google.at/maps?q=' + item.lat + ',' + item.lng + '(' + item.name.split(' ').join('+') + ')&num=1&z=17" rel="external" target="_blank">Anfahrt</a>');

		// Kontakt
		var col = '<b>' + item.name + '</b><br/>' + item.address + '<br/>' + item.zip + '<br/>' + item.country + '<br/><br/>' +
			'Tel. <a href="tel:' + item.phone + '">' + item.phone + '</a><br/>Fax. ' + item.fax + '<br/>e-Mail <a href="mailto:' + item.email + '">' + item.email + '</a><br/><a href="http://' + item.www + '" target="_blank">' + item.www + '</a>';
		//$content.find("#col-kontakt > p").html("");
		$content.find("#col-kontakt > p").empty();
		//$content.find("#col-kontakt > p").html(col);
		$content.find("#col-kontakt > p").append(col);
		$content.find("#col-kontakt > p").trigger("create");

		
		// ausstattung
		var tmp = '';
		$.each(item.equipment, function (key, val) {
			tmp+='<img src="data:image/jpg;base64,' + val + '" /> ';
		});
		$content.find("#col-equipment > p").html("");
		$content.find("#col-equipment > p").html(tmp);

		// Beschreibung

		$content.find("#col-note > p").html(item.description);

		// Maps

		//$content.find("#map > p").html('<a href="https://maps.google.at/maps?q=' + item.lat + ',' + item.lng + '(' + item.name.split(' ').join('+') + ')&num=1&z=17" rel="external" target="_blank">Google Map</a>');


		// Preise
		$content.find("#col-price > p").html("");

		var price = '<table>'+
			'<tr><td>Erwachsene:</td><td>' + item.adult_price + 	'&nbsp;&euro;'+ (item.adult_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.adult_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.adult_info + '</td></tr>'+
			'<tr><td>Kinder:</td><td>' + item.kids_price + 			'&nbsp;&euro;'+ (item.kids_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.kids_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.kids_info + '</td></tr>'+
			'<tr><td>Auto:</td><td>' + item.car_price + 			'&nbsp;&euro;'+ (item.car_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.car_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.car_info + '</td></tr>'+
			'<tr><td>Wohnanhänger:</td><td>' + item.camper_price + 	'&nbsp;&euro;'+ (item.camper_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.camper_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.camper_info + '</td></tr>'+
			'<tr><td>Wohnmobil:</td><td>' + item.caravan_price + 	'&nbsp;&euro;'+ (item.caravan_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.caravan_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.caravan_info + '</td></tr>'+
			'<tr><td>großes Zelt:</td><td>' + item.marquee_price + 	'&nbsp;&euro;'+ (item.marquee_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.marquee_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.marquee_info + '</td></tr>'+
			'<tr><td>Zelt:</td><td>' + item.tent_price + 			'&nbsp;&euro;'+ (item.tent_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.tent_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.tent_info + '</td></tr>'+
			'<tr><td>Motorrad:</td><td>' + item.motorbike_price + 	'&nbsp;&euro;'+ (item.motorbike_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.motorbike_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.motorbike_info + '</td></tr>'+
			'<tr><td>Hunde:</td><td>' + item.dogs_price + 			'&nbsp;&euro;'+ (item.dogs_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.dogs_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.dogs_info + '</td></tr>'+
			'<tr><td>Strom:</td><td>' + item.electricity_price + 	'&nbsp;&euro;'+ (item.electricity_price_to != "0.00" ? '&nbsp;-&nbsp;'+item.electricity_price_to+'&nbsp;&euro;' : '') +'</td><td>' + item.electricity_info + '</td></tr>'+
		'</table>';

		$content.find("#col-price > p").html(price);

		// Bilder

		$content.find("#images > p").html("");
		$.each(item.impressions, function (key, val) {
			//li ='<div class="ui-block-'+(key%2==0?'a':'b')+'"><a href="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'"><img src="http://www.campingsuedtirol.com/uploads/tx_wccamping/'+val+'" /></a></div>';
			li = '<img width="100%" src="data:image/jpg;base64,' + val + '" /><br />';
			$content.find("#images > p").append(li);
		});

		// Pages are lazily enhanced. We call page() on the page
		// element to make sure it is always enhanced before we
		// attempt to enhance the listview markup we just injected.
		// Subsequent calls to page() are ignored since a page/widget
		// can only be enhanced once.
		$('#info').trigger('create');

		//$('a[data-tab][class="ui-btn-active"]').trigger("click");
		$('#info_tab').trigger("click");
		*/
		console.log('item select');
	}
}


var downloadApp = function() {
}

downloadApp.prototype = {
	run: function(uri, fileName, folderName) {
		var that = this,
		filePath = "";
        
		that.getFilesystem(
			function(fileSystem) {
				console.log("gotFS");
				if (device.platform === "Android") {
					console.log("android");
					that.transferFile(uri, fileSystem.root.fullPath + "\/" + fileName);
					/*
					that.getFolder(fileSystem, folderName, function(folder) {
						filePath = folder.fullPath + "\/" + fileName;
						that.transferFile(uri, filePath);
						console.log("got filesystem");
					}, function() {
						console.log("failed to get folder");
					});
*/
				}
				else {
					console.log("no android");
					filePath = fileSystem.root.fullPath + "\/" + fileName;
					that.transferFile(uri, filePath)
				}
			},
			function() {
				console.log("failed to get filesystem");
			}
		);

	},
    
	getFilesystem:function (success, fail) {
        //check whether we're in Simulator
		if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
			alert("Not Supported in Simulator.");
		}
		else {
			window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, success, fail);
		}
	},

	getFolder: function (fileSystem, folderName, success, fail) {
		fileSystem.root.getDirectory(folderName, {create: true, exclusive: false}, success, fail)
	},

	transferFile: function (uri, filePath) {
		console.log("transfer start");
		var transfer = new FileTransfer();
		transfer.download(
			uri,
			filePath,
			function(entry) {
				$.mobile.hidePageLoadingMsg();
				//window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
				showList();
			},
			function(error) {
				$.mobile.hidePageLoadingMsg();
                //document.getElementById("result").innerHTML = "An error has occurred: Code = " + error.code;
				console.log("download error source " + error.source);
				console.log("download error target " + error.target);
				console.log("upload error code" + error.code);
				alert('Error. Please try again later');
			}
		);
		console.log("transfer end");
	}
}

// Read FileTransfer
function gotFS(fileSystem) {
	console.log(fileSystem.root.fullPath);
    fileSystem.root.getFile("json.txt", {create: false, exclusive: false}, gotFileEntry, _onErrorRF);
}
function gotFileEntry(fileEntry) {
	$.mobile.showPageLoadingMsg();
	fileEntry.file(gotFile, fail);
}
function gotFile(file){
	readAsText(file);
}
function readAsText(file) {
	var reader = new FileReader();
	reader.onloadend = function(evt) {
		console.log("Read as text");
		_onSuccessR(evt.target.result);
	};
	reader.readAsText(file);
}
function fail(evt) {
    console.log();
}