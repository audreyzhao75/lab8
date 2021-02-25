function initMap() {
	// add your code here
    L.mapquest.key = 'OBVONxYIcTFBkXafJeB9r8E0AKh45f0X'

    var map = L.mapquest.map('map', {
        center: [32.88, -117.236],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12,
        zoomControl: false
    });

    L.marker([32.879, -117.237]).addTo(map);
}