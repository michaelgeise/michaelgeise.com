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

  // A Biddle
  abiddle = new google.maps.Marker({
    position: {lat: 39.945384, lng: -75.204013},
    map: map,
    title: 'abiddle',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(abiddle, 'click', function() {
      $('#a-biddle').modal('show');
  });

  // A Brewster
  abrewster = new google.maps.Marker({
    position: {lat: 39.946304, lng: -75.202559}, 
    map: map,
    title: 'abrewster',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(abrewster, 'click', function() {
      $('#a-brewster').modal('show');
  });

  // W Bucknell
  wbucknell = new google.maps.Marker({
    position: {lat: 39.948186, lng: -75.202109},
    map: map,
    title: 'wbucknell',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(wbucknell, 'click', function() {
      $('#w-bucknell').modal('show');
  });

  // W Bullitt
  wbullitt = new google.maps.Marker({
    position: {lat: 39.946679, lng: -75.202061},
    map: map,
    title: 'wbullitt',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(wbullitt, 'click', function() {
      $('#w-bullitt').modal('show');
  });

  // A Bullitt
  abullitt = new google.maps.Marker({
    position: {lat: 39.946674, lng: -75.201973},
    map: map,
    title: 'abullitt',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(abullitt, 'click', function() {
      $('#a-bullitt').modal('show');
  });

  // A Carr
  acarr = new google.maps.Marker({
    position: {lat: 39.945320, lng: -75.203030},
    map: map,
    title: 'acarr',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(acarr, 'click', function() {
      $('#a-carr').modal('show');
  });

  // E Cresson
  ecresson = new google.maps.Marker({
    position: {lat: 39.946111, lng: -75.202271}, 
    map: map,
    title: 'ecresson',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(ecresson, 'click', function() {
      $('#e-cresson').modal('show');
  });

  // H Dreer
  hdreer = new google.maps.Marker({
    position: {lat: 39.946789, lng: -75.203595},
    map: map,
    title: 'hdreer',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(hdreer, 'click', function() {
      $('#h-dreer').modal('show');
  });

  // T Eakins
  teakins = new google.maps.Marker({
    position: {lat: 39.945430, lng: -75.202539},
    map: map,
    title: 'teakins',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(teakins, 'click', function() {
      $('#t-eakins').modal('show');
  });

  // A Eastwick
  aeastwick = new google.maps.Marker({
    position: {lat: 39.947614, lng: -75.204292},
    map: map,
    title: 'aeastwick',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(aeastwick, 'click', function() {
      $('#a-eastwick').modal('show');
  });

  // O Eddy
  oeddy = new google.maps.Marker({
    position: {lat: 39.947950, lng: -75.204053}, 
    map: map,
    title: 'oeddy',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(oeddy, 'click', function() {
      $('#o-eddy').modal('show');
  });

  // S Felton
  sfelton = new google.maps.Marker({
    position: {lat: 39.945085, lng: -75.202474}, 
    map: map,
    title: 'sfelton',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(sfelton, 'click', function() {
      $('#s-felton').modal('show');
  });

  // S Fisher
  sfisher = new google.maps.Marker({
    position: {lat: 39.947375, lng: -75.203461}, 
    map: map,
    title: 'sfisher',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(sfisher, 'click', function() {
      $('#s-fisher').modal('show');
  });

  // J Fraser
  jfraser = new google.maps.Marker({
    position: {lat: 39.947020, lng: -75.203587}, 
    map: map,
    title: 'jfraser',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(jfraser, 'click', function() {
      $('#j-fraser').modal('show');
  });

  // C Haseltine
  chaseltine = new google.maps.Marker({
    position: {lat: 39.945545, lng: -75.204339}, 
    map: map,
    title: 'chaseltine',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(chaseltine, 'click', function() {
      $('#c-haseltine').modal('show');
  });

  // F Hayden
  fhayden = new google.maps.Marker({
    position: {lat: 39.946857, lng: -75.200548}, 
    map: map,
    title: 'fhayden',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(fhayden, 'click', function() {
      $('#f-hayden').modal('show');
  });

  // C Keen
  ckeen = new google.maps.Marker({
    position: {lat: 39.946214, lng: -75.202592}, 
    map: map,
    title: 'ckeen',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(ckeen, 'click', function() {
      $('#c-keen').modal('show');
  });

  // J Longacre
  jlongacre = new google.maps.Marker({
    position: {lat: 39.945515, lng: -75.202434}, 
    map: map,
    title: 'jlongacre',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(jlongacre, 'click', function() {
      $('#j-longacre').modal('show');
  });

  // S Mitchell
  smitchell = new google.maps.Marker({
    position: {lat: 39.946678, lng: -75.201594}, 
    map: map,
    title: 'smitchell',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(smitchell, 'click', function() {
      $('#s-mitchell').modal('show');
  });

  // W Moore
  wmoore = new google.maps.Marker({
    position: {lat: 39.946492, lng: -75.203004}, 
    map: map,
    title: 'wmoore',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(wmoore, 'click', function() {
      $('#w-moore').modal('show');
  });

  // J Ord
  jord = new google.maps.Marker({
    position: {lat: 39.948358, lng: -75.202986}, 
    map: map,
    title: 'jord',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(jord, 'click', function() {
      $('#j-ord').modal('show');
  });

  // R Peale
  rpeale = new google.maps.Marker({
    position: {lat: 39.947837, lng: -75.202720}, 
    map: map,
    title: 'rpeale',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(rpeale, 'click', function() {
      $('#r-peale').modal('show');
  });

  // E Price
  eprice = new google.maps.Marker({
    position: {lat: 39.946125, lng: -75.202950}, 
    map: map,
    title: 'eprice',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(eprice, 'click', function() {
      $('#e-price').modal('show');
  });

  // L Redner
  lredner = new google.maps.Marker({
    position: {lat: 39.946284, lng: -75.203260}, 
    map: map,
    title: 'lredner',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(lredner, 'click', function() {
      $('#l-redner').modal('show');
  });

  // A Whitney
  awhitney = new google.maps.Marker({
    position: {lat: 39.946478, lng: -75.202115}, 
    map: map,
    title: 'awhitney',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(awhitney, 'click', function() {
      $('#a-whitney').modal('show');
  });

  // H Wood
  hwood = new google.maps.Marker({
    position: {lat: 39.945654, lng: -75.202349}, 
    map: map,
    title: 'hwood',
    icon: new google.maps.MarkerImage( grave, null, null, null, new google.maps.Size(28,32))
  });

  google.maps.event.addListener(hwood, 'click', function() {
      $('#h-wood').modal('show');
  });

}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
