// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var marker;
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.947222, lng: -75.203219},
    zoom: 16,
    gestureHandling: 'cooperative',
    fullscreenControl: false
  });
  infoWindow = new google.maps.InfoWindow;

  /*global gmap */
  function getUserLocation(map) {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
              var point = new google.maps.LatLng(position.coords.latitude,
                  position.coords.longitude);

              if (typeof getUserLocation.user_marker == 'undefined') {
                  getUserLocation.user_marker = new google.maps.Marker({
                      position:point,
                      map:map,
                      icon:'images/position.svg'
                  });
                  getUserLocation.user_marker_window = new google.maps.InfoWindow({
                      content:'You'
                  });

                  google.maps.event.addListener(getUserLocation.user_marker, 'click', function () {
                      getUserLocation.user_marker_window.open(getUserLocation.user_marker);
                  });
              }
              getUserLocation.user_marker.setPosition(point);
          });
      }
  }

  if (navigator.geolocation) {
      getUserLocation(map);
      setInterval(function () {
          getUserLocation(map);
      }, 5000);
  }

  var grave = 'images/grave.svg';
  
  // J Brington
  jbrinton = new google.maps.Marker({
    position: {lat: 39.946101, lng: -75.200578},
    map: map,
    title: 'jbrinton',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(jbrinton, 'click', function() {
      $('#j-brinton').modal('show');
  });

  // W Eyre
  weyre = new google.maps.Marker({
    position: {lat: 39.947785, lng: -75.202078},
    map: map,
    title: 'weyre',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(weyre, 'click', function() {
      $('#w-eyre').modal('show');
  });

  // M Grew
  mgrew = new google.maps.Marker({
    position: {lat: 39.945740, lng: -75.202180},
    map: map,
    title: 'mgrew',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(mgrew, 'click', function() {
      $('#m-grew').modal('show');
  });

  // S Gross
  sgross = new google.maps.Marker({
    position: {lat: 39.946899, lng: -75.201885},
    map: map,
    title: 'sgross',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(sgross, 'click', function() {
      $('#s-gross').modal('show');
  });

  //J Smith
  jsmith = new google.maps.Marker({
    position: {lat: 39.947367, lng: -75.202914},
    map: map,
    title: 'jsmith',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(jsmith, 'click', function() {
      $('#j-smith').modal('show');
  });

  // F Drexel
  fdrexel = new google.maps.Marker({
    position: {lat: 39.945306, lng: -75.203999},
    map: map,
    title: 'fdrexel',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(fdrexel, 'click', function() {
      $('#f-drexel').modal('show');
  });

  // T Evans
  tevans = new google.maps.Marker({
    position: {lat: 39.948042, lng: -75.201550},
    map: map,
    title: 'tevans',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(tevans, 'click', function() {
      $('#t-evans').modal('show');
  });

  // T Baba
  tbaba = new google.maps.Marker({
    position: {lat: 39.947818, lng: -75.202227},
    map: map,
    title: 'tbaba',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(tbaba, 'click', function() {
      $('#t-baba').modal('show');
  });

}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
