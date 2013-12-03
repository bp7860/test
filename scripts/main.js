
$(function() {
	var Items = null;
	var fileSystemHelper = new FileSystemHelper();

	$.ajax({
		dataType: "json",
		url: "http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1",
		success: function(data) {
			console.log('_onSuccessAjax');
			_onSuccessAjax(data);
		}
	});

	function _onSuccessAjax(data) {
		
		fileSystemHelper.writeLine( 'json.txt', 'test', _onSuccessW, _onError );
		fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessR, _onError );
		showList();
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
});


