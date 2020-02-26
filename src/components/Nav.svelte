<script>
  import { link } from "svelte-spa-router";
  import { user } from "../stores.js";
  function logout() {
    $user = undefined;
  }
</script>

<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/" use:link>
      <img class="image is-32x32" src="/logo.png" />
    </a>

    <a
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/" use:link>
        Home
      </a>

      {#if $user}
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Admin
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" href="/admin/users" use:link>
              User Admin
            </a>
            <a class="navbar-item" href="/admin/icons" use:link>
              Icon/Resource Admin
            </a>
            <a class="navbar-item" href="/admin/landmarks" use:link>
              Landmark Admin
            </a>
          </div>
        </div>
      {/if}

      {#if $user}
        <a class="navbar-item" href="/map" use:link>
          Map
        </a>

        <button class="navbar-item button is-primary" style="height:52px" on:click={logout}>
          Logout
        </button>
      {/if}
    </div>

    {#if !$user}
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="/register" use:link>
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="/login" use:link>
              Log in
            </a>
          </div>
        </div>
      </div>
    {/if}
  </div>
</nav>
