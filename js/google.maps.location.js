function initialize() {
	var myLatlng = new google.maps.LatLng(19.3790911, -99.1760436, 16.75);
	var mapOptions = {
		zoom : 13,
		scrollwheel : false,
		center : myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var marker = new google.maps.Marker({
		position : myLatlng,
		map : map,
		label : 'WAVEDev'
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);