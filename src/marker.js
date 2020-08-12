const mapboxgl = require("mapbox-gl");
const buildMarker = (coords, type) => {
  const newMarker = document.createElement('div');
  newMarker.classList.add('marker', type);
  return new mapboxgl.Marker(newMarker).setLngLat(coords);
}


module.exports = {
  buildMarker
}
