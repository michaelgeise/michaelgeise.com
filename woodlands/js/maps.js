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
    fullscreenControl: false
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // infoWindow.setPosition(pos);
      // infoWindow.setContent('Location found.');
      // infoWindow.open(map);
      // map.setCenter(pos);
      var position = 'woodlands/images/position.svg';
      var positionMarker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'position!',
        icon: new google.maps.MarkerImage( position, null, null, null, new google.maps.Size(20,20))
      });
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }


  var grave = 'woodlands/images/grave.svg';
  
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

}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
