import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


// Where you want to render the map.
var element = document.getElementById('osm-map');

// Height has to be set. You can do this in CSS too.
element.style = 'height:350px;';

// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile leayer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Target's GPS coordinates.
var target = L.latLng('39.9783', '-105.2750');

// Set map's center to target with zoom 11.
map.setView(target, 11);

// Place a marker on the same location.
L.marker(target).addTo(map);

L.marker([39.9783, -105.2750]).addTo(map)
  .bindPopup('<b>NCAR Mesa Laboratory</b><br>1850 Table Mesa Dr, Boulder, CO 80305')
  .openPopup();