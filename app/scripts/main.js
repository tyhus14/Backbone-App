$(function(){
  new jvm.Map({
    container: $('#world-map'),
    map: 'world_mill_en',
    markers: [
      [61.18, -149.53],
      [21.18, -157.49],
      [40.66, -73.56],
      [41.52, -87.37],
      [35.22, -80.84],
      [31.52, -87.37]
    ],
    series: {
      markers: [{
        attribute: 'fill',
        scale: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        values: [408, 512, 550, 781],
        legend: {
          vertical: true
        }
      }],
      regions: [{
        scale: {
          red: '#ff0000',
          green: '#00ff00'
        },
        attribute: 'fill',
        values: {
          "US-KS": 'red',
          "US-MO": 'red',
          "US-IA": 'green',
          "US-NE": 'green'
        },
        legend: {
          horizontal: true,
          title: 'Color'
        }
      }]
    }
  });
});