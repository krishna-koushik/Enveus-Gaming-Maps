<script>
  export let location;
  import { onMount } from "svelte";

  const yx = L.latLng;
  const xy = function(x, y) {
    if (L.Util.isArray(x)) {
      // When doing xy([x, y]);
      return yx(x[1], x[0]);
    }
    return yx(y, x); // When doing xy(x, y);
  };

  function initMap() {
    const icon = L.icon({
      iconUrl: "copper.png",
      // shadowUrl: "leaf-shadow.png",

      iconSize: [38, 38], // size of the icon
      // shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const map = L.map("map", {
      crs: L.CRS.Simple
    });

    const bounds = [
      [0, 0],
      [1000, 1000]
    ];

    const image = L.imageOverlay("/map.png", bounds).addTo(map);
    map.fitBounds(bounds);

    const deneb = xy(500, 500);
    L.marker(deneb, {icon})
      .addTo(map)
      .bindPopup('Copper. These minerals spawn every 40 minutes');
  }

  onMount(initMap);
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
