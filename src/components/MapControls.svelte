<script>
  import { icons, filters } from '../stores.js';

</script>

<div>
  <h1>Map Controls</h1>

  <hr />

  <p>Filters</p>
  <ul>
    {#each $icons as icon}
      <li>
        {icon.name}
      </li>
    {/each}
  </ul>

  <hr />

  <p>Landmarks</p>
  <ul>
    {#each $icons as icon}
      <li>
        {icon.name}
      </li>
    {/each}
  </ul>
</div>

<style>
  h1, p {
    text-align: center;
  }
</style>