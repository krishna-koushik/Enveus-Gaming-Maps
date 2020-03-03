<script>
  export let clickedPosition = { lat: 0, lng: 0 };
  let landmarkMessage = '';
  let clickedIcon = { id: '', name: ''};

  import { onMount } from 'svelte';
  import LandmarkService from '../services/LandmarkService.js';
  import { icons, filters } from '../stores.js';

  function clearData() {
    landmarkMessage = '';
    clickedIcon = { id: '', name: ''}
    clickedPosition = { lat: 0, lng: 0 };
  }

  function setIcon(icon) {
    clickedIcon = icon;
  }

  async function saveLandmark() {
    await LandmarkService.addLandmark(clickedPosition, clickedIcon, landmarkMessage);
    clearData();
  }

  onMount(clearData);
</script>

<div class='map-controls'>
  <div class="newResource-collabsible">
    <input id="newResourcecollapsible" class="toggle" type="checkbox" style="display:none;">
    <label for="newResourcecollapsible" class="lbl-toggle">New Resource</label>
    <div class="collapsible-content">
      <div class="content-inner">
        <label for="resourseName">Type</label>
        <input type="text" id="resourseName" name="resourseName" readonly placeholder="Click an icon below" bind:value={clickedIcon.name}><br>
        <label>Click Map to populate X/Y</label><br>
        <label for="xLocation">X</label>
        <input type="text" id="xLocation" name="xLocation" bind:value={clickedPosition.lng}><br>
        <label for="yLocation">Y</label>
        <input type="text" id="yLocation" name="yLocation" bind:value={clickedPosition.lat}><br>
        <textarea bind:value={landmarkMessage} placeholder="Write a message about this landmark"></textarea>
        <button on:click={saveLandmark}>Save Resource</button>
      </div>
    </div>
  </div>

  <hr />

  <div class="filters-collabsible">
    <input id="filterscollapsible" class="toggle" type="checkbox" style="display:none;">
    <label for="filterscollapsible" class="lbl-toggle">Filters</label>
    <div class="collapsible-content">
      <div class="content-inner">
      <p>These filters are not implemented yet!</p>
      <ul>
        {#each $icons as icon}
          <li>
            <input type="checkbox" />
            {icon.name}
          </li>
        {/each}
      </ul>
      </div>
    </div>
  </div>

  <hr />

  <p>Landmarks</p>
  <div class='landmark-container'>
    {#each $icons as icon}
      <div on:click={(e) => setIcon(icon)}>
        <img class='icon-image-large' src={icon.image} alt=''/>
        <!-- {icon.name} -->
      </div>
    {/each}
  </div>
</div>

<style>
  ul {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
  .map-controls {
    padding: 10px;
  }

  hr {
    margin: 10 -10px;
  }

  h1, p {
    text-align: center;
  }

  .landmark-container {
    display: flex;
    flex-wrap: wrap;
  }

  .icon-image-large {
    width: 50px;
  }

  textarea {
    margin-top: 10px;
    width: 100%;
    height: 50px;
  }

.filters-collabsible {
  margin-bottom: 1.2rem 0;
}

.lbl-toggle {
  display: block;

  font-weight: bold;
  font-family: monospace;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;

  padding: 1rem;

  color: rgb(162, 14, 167);
  background: gray;

  cursor: pointer;

  border-radius: 7px;
  transition: all 0.25s ease-out;
}

.lbl-toggle:hover {
  color: rgb(41, 168, 58);
}

.lbl-toggle::before {
  content: ' ';
  display: inline-block;

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);

  transition: transform .2s ease-out;
}

.toggle:checked + .lbl-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.collapsible-content {
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
}

.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 100vh;
}

.toggle:checked + .lbl-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.collapsible-content .content-inner {
  background: gray;
  border-bottom: 1px solid rgba(146, 146, 144, 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: .5rem 1rem;
}
</style>