
function getname(coords,start_or_end)
{
   var point = [coords.lng, coords.lat ]; 

  var xhttp = new XMLHttpRequest();
  var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + point[0] + ',' + point[1] + '.json?types=poi&access_token='+mapboxgl.accessToken;
  

xhttp.open("GET", url, false);
xhttp.send();
responseJSON=JSON.parse(xhttp.response)
//console.log(url);

if(start_or_end=="start")
{
  var ipbox = document.getElementById("startipbox");
}
else if(start_or_end=="end")
{
  var ipbox = document.getElementById("endipbox"); 

}

if(responseJSON.features.length==0)
{
  //ipbox.value="No Address Found";
  ipbox.value=point;
  
  //console.log("NO ");
}
else{
  placename=responseJSON.features[0].place_name;
  ipbox.value=placename;
  //console.log(placename);  

}

  
  
//console.log(aa.features[0].place_name);
//console.log(url);


}