

function onDragEnd() {
    lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'From <br>Longitude: ' + lngLat.lng + '<br />Latitude : ' + lngLat.lat;
    getRoute();
    getname(lngLat,"start");
    
}
marker.on('dragend', onDragEnd);



function onDragEnd2() {
    lngLat2 = marker2.getLngLat();
    coordinates2.style.display = 'block';
    coordinates2.innerHTML = 'To <br>Longitude: ' + lngLat2.lng + '<br />Latitude : ' + lngLat2.lat;
    getRoute();
    getname(lngLat2,"end");
}
marker2.on('dragend', onDragEnd2);
