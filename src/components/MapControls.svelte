<script>
  import { icons, filters } from '../stores.js';

</script>

<div class='map-controls'>
  <h1>Map Controls</h1>

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
      <div>
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
</style>