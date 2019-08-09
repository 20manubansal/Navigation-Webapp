
function getRouteFromIn() {

  var startipbox=document.getElementById("startipbox").value;
  var endipbox=document.getElementById("endipbox").value;

  //var start = [77.1025, 28.7041 ]; // delhi

  var url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+startipbox+'.json?types=address&access_token=' + mapboxgl.accessToken;
  var url2='https://api.mapbox.com/geocoding/v5/mapbox.places/'+endipbox+'.json?types=address&access_token=' + mapboxgl.accessToken;

//console.log(url);
 

var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', url, true);

var req2 = new XMLHttpRequest();
req2.responseType = 'json';
req2.open('GET', url2, true);


  req2.onload = function() {
//    console.log(url);
//    console.log("dfdfdfdfd");

    // startipbox.value = 'ssssss';
    // endipbox.value = 'ssssss';
    
    var startresp=req.response;
    var startresp2=req2.response;

    if(startresp.length==0 || startresp.length==0 )
    {
      console.log("invalid req")
    }
    else
    {


    lngLat.lng=startresp.features[0].center[0];
    lngLat.lat=startresp.features[0].center[1];

    lngLat2.lng=startresp2.features[0].center[0];
    lngLat2.lat=startresp2.features[0].center[1];

    marker.remove();
    marker2.remove();
    console.log(marker);
      
  marker.lngLat = [lngLat.lng, lngLat.lat ]; 
  marker2.lngLat = [lngLat2.lng, lngLat2.lat ]; 
  
  marker.addTo(map);
  marker2.addTo(map);
  map.flyTo({
    center: [(lngLat.lng+lngLat2.lng)/2,(lngLat.lat+lngLat2.lat)/2],
    zoom:4
    
  });

  onDragEnd();
  onDragEnd2()
  getRoute();

  //  console.log(lngLat);
  //  console.log(lngLat2);

    }


    
  };
  
  req.send();
  req2.send();
//console.log(req);

}
