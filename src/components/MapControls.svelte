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
  <h1>Map Controls</h1>

  New Resource:
  <br><br>
  <label for="resourseName">Type</label>
  <input type="text" id="resourseName" name="resourseName" readonly placeholder="Click an icon below" bind:value={clickedIcon.name}><br>
  <label>Click Map to populate X/Y</label><br>
  <label for="xLocation">X</label>
  <input type="text" id="xLocation" name="xLocation" bind:value={clickedPosition.lng}><br>
  <label for="yLocation">Y</label>
  <input type="text" id="yLocation" name="yLocation" bind:value={clickedPosition.lat}><br>
  <textarea bind:value={landmarkMessage} placeholder="Write a message about this landmark"></textarea>
  <button on:click={saveLandmark}>Save Resource</button>

  <hr />

  <p>Filters</p>
  <ul>
    {#each $icons as icon}
      <li>
        <input type="checkbox" />
        {icon.name}
      </li>
    {/each}
  </ul>

  <hr />

  <p>Landmarks</p>
  <div class='landmark-container'>
    {#each $icons as icon}
      <div on:click={(e) => setIcon(icon)}>
        <img class='icon-image-large' src={icon.image} />
        <!-- {icon.name} -->
      </div>
    {/each}
  </div>
</div>

<style>
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
</style>