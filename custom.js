var var_marker

function init_map() {
        var query = window.location.search.substring(1);
        
        var vars = query.split("&");

        var lat = vars[0].split("=");
        var lon = vars[1].split("=");

        var var_location = new google.maps.LatLng(lat[1],lon[1]);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 12
        };
 
        var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            customInfo: "Test data",
            title:"Boston"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
        var_marker.setMap(var_map);

        var contentString = '<div class="info-window">' +
                '<h3>Fitness Freak</h3>' +
                '<div class="info-content">' +
                '75 Saint Alphonsus Street, Boston, MA' +
                '<div class="info-content">' +
                '<a href="https://maps.google.com?saddr=Current+Location&daddr='+lat[1]+','+lon[1]+'"> Get Directions </a>' +
                '</div>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });


        var_marker.addListener('click', function () {
            infowindow.open(var_map, var_marker);
            var_map.setZoom(17);
            var_map.panTo(var_marker.position);
        });

 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);

