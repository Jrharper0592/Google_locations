function initMap() {
  var cords = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: cords
  });
  var marker = new google.maps.Marker({
    position: cords,
    map: map
  });
}

// https://maps.googleapis.com/maps/api/js?key=AIzaSyAlrgwL-xe4r9Yt4zIbMTxEBQOZzGMg2ek&callback=initMap