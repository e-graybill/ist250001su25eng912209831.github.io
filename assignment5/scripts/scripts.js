function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.038649, -79.305614),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
