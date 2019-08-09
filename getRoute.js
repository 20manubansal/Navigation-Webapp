



function getRoute() {

  //var start = [77.1025, 28.7041 ]; // delhi
  var start = [lngLat.lng, lngLat.lat ]; 
  var end = [lngLat2.lng, lngLat2.lat ]; 
  //console.log(lngLat);
  

  var url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?&steps=true&geometries=geojson&overview=full&access_token=' + mapboxgl.accessToken;
 // console.log("orig route");
  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', url, true);

  
  req.onload = function() {

    if(req.response.length==0)
    {
      console.log("invalid route req");
      return 0;
    }
    var data = req.response.routes[0];           
    var route = data.geometry.coordinates;
   // console.log(route);
    var geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    };

    // if the route already exists on the map, reset it using setData
    if (map.getSource('route')) {
      map.getSource('route').setData(geojson);
    } else { // otherwise, make a new request
      
      map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: geojson
            }
          }
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75
        }
      });

    }


var instructions = document.getElementById('instructions');
var steps = data.legs[0].steps;

//console.log(url);
var tripInstructions = [];
for (var i = 0; i < steps.length; i++) {
  tripInstructions.push('<br><li>' + steps[i].maneuver.instruction) + '</li>';
  }  instructions.innerHTML = '<br><span class="duration">Trip duration: ' + Math.floor(data.duration/60)+' mins<br>' +'Trip distance: '+Math.floor((data.distance)/1000)+' km <br>'+ tripInstructions+ ' </span>';
  
//console.log(data.distance);

  };
  req.send();


}
