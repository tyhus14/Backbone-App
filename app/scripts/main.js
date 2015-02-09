$(function(){
  var map,
      markerIndex = 0,
      markersCoords = {};

  map = new jvm.Map({
      map: 'world_mill_en',
      markerStyle: {
        initial: {
          fill: 'green'
        }
      },
      container: $('#world-map'),
      onMarkerTipShow: function(e, label, code){
        map.tip.text(markersCoords[code].lat.toFixed(2)+', '+markersCoords[code].lng.toFixed(2));
      },
      onMarkerClick: function(e, code){
        map.removeMarkers([code]);
        map.tip.hide();
      }
  });

  map.container.click(function(e){
      var latLng = map.pointToLatLng(e.offsetX, e.offsetY),
          targetCls = $(e.target).attr('class');

      if (latLng && (!targetCls || (targetCls && $(e.target).attr('class').indexOf('jvectormap-marker') === -1))) {
        markersCoords[markerIndex] = latLng;
        map.addMarker(markerIndex, {latLng: [latLng.lat, latLng.lng]});
        markerIndex += 1;
      }
  });
});

