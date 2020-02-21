<script>
  export let location;
  import { onMount } from "svelte";

  import { icons, landmarks } from "../stores.js";
  import { MapRef } from '../firebase.js';

  let map;
  let iconLayer;
  let localIcons = {};

  const yx = L.latLng;
  const xy = function(x, y) {
    if (L.Util.isArray(x)) {
      // When doing xy([x, y]);
      return yx(x[1], x[0]);
    }
    return yx(y, x); // When doing xy(x, y);
  };

  function iconsChanged(data) {
    console.log("icons", data);

    data.forEach(icon => {
      localIcons[icon.id] = L.icon({
        iconUrl: icon.image,
        iconSize: [38, 38],
        iconAnchor: [0, 0],
        popupAnchor: [38/2.0, 38/2.0]
      });
    });
  }

  function landmarksChanged(data) {
    iconLayer.clearLayers();
    data.forEach((landmark) => {
      const icon = localIcons[landmark.icon];
      console.log('icon', icon);
      const location = xy(landmark.x, landmark.y);
      L.marker(location, { icon })
        .addTo(iconLayer)
        .bindPopup(landmark.message);
    });
  }

  function initMap() {
    map = L.map("map", {
      crs: L.CRS.Simple
    });

    iconLayer = L.layerGroup().addTo(map);

    const bounds = [
      [0, 0],
      [1000, 1000]
    ];

    map.fitBounds(bounds);

    MapRef.getDownloadURL().then((url) => {
      const image = L.imageOverlay(url, bounds).addTo(map);
    });
  }

  onMount(() => {
    initMap();

    icons.subscribe(iconsChanged);
    landmarks.subscribe(landmarksChanged);
  });
</script>

<div>
  <sidebar>
    <h1>Map Controls</h1>
  </sidebar>

  <div id="map"></div>
</div>

<style>
  div {
    display: flex;
    width: 100%;
    height: 100%;
  }

  sidebar {
    flex-basis: 20%;
    background-color: black;
    color: white;
  }

  sidebar::-webkit-scrollbar {
    display: none;
  }

  #map {
  }
</style>
