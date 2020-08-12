const mapboxgl = require("mapbox-gl");
const { buildMarker } = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1Ijoiei1yb2RuZXkiLCJhIjoiY2tkcW82Y3lyMmRzNTJwbGpvYzNhbWRvcCJ9.BNrp41GfEYdpGtmFwirkug';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const mapMarker = buildMarker([-74.009151, 40.705086], 'home');
mapMarker.addTo(map);

/* const mapMarker = document.createElement('div');
mapMarker.classList.add('marker', 'home');
console.log(mapMarker);

new mapboxgl.Marker(mapMarker).setLngLat([-74.009151, 40.705086]).addTo(map); */

