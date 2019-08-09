

mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWJhbnNhbCIsImEiOiJjanlwbXFjMjkxOWJrM2xxZnBpbHRoNHhxIn0.JYcbwugs54_4cF_uJfHKlQ';
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.2459663457276,28.63718409814406],
    zoom: 12
});



var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([77.23085068055929,28.6125479037115])
    .addTo(map);




var marker2 = new mapboxgl.Marker({
    draggable: true,
    color: 'red'
})
    .setLngLat([ 77.24083718893866,28.65650043487696])
    .addTo(map);


var lngLat = marker.getLngLat();
var lngLat2 = marker2.getLngLat();
    



map.on('load', function() 
{
    //getRoute();
    getname(lngLat,"start");
    getname(lngLat2,"end");
    //getRoute();
    onDragEnd();
    onDragEnd2()


})

var userlocation=map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    }));

var usercoords=[userlocation.transform._center.lng,userlocation.transform._center.lat];
//console.log(this);
marker.setLngLat(usercoords);
marker.addTo(map);
