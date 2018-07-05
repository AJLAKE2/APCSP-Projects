$(document).ready(function() {
    var socket = io.connect('localhost:3000'); // create connection
    socket.on('valuesReceived', function(data) {
        $('#air-quality').text(data.airQuality);
        $('#distance').text(data.distance + " cm");
        $('#humidity').text(data.humi + "%");
        $('#temperature').text(data.temp + " °C");
//        $('#orientation').text(data.orientation);
//        $('#vibration').text(data.vibration);
       $('#accelerometer').text(data.accelerometer);
    });
});

function initMap() {
    var kansasCity = {lat: 39.110298, lng: -94.581078};
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 8, center: kansasCity });
    var marker = new google.maps.Marker({ position: kansasCity, map: map });
}
