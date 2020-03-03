<script>
  import { user } from './stores';
  
  import { Router, Link, Route } from "svelte-routing";

  // Components
  import Nav from './components/Nav.svelte';
  import Footer from './components/Footer.svelte';

  // Pages/Routes
  import Welcome from './pages/Welcome.svelte';
  import Login from './pages/Login.svelte';
  import Register from './pages/Register.svelte';
  import Forgot from './pages/Forgot.svelte';
  import Map from './pages/Map.svelte';

  // Admin routes/pages
  import UserAdministration from './pages/admin/Users.svelte';
  import IconAdministration from './pages/admin/Icons.svelte';
  import LandmarkAdministration from './pages/admin/Landmarks.svelte';

  // Catch all/routing errors
  import NotFound from './pages/NotFound.svelte';

  export let url = "";
</script>

<Nav></Nav>

<!-- App Container -->
<Router url="{url}">
  <div>
    {#if $user}
      <Route path="/">
        <Map />
      </Route>

      <Route path="/map">
        <Map />
      </Route>

      <!-- <Route path="/admin/users">
        <UserAdministration />
      </Route>

      <Route path="/admin/icons">
        <IconAdministration />
      </Route>

      <Route path="/admin/landmarks">
        <LandmarkAdministration />
      </Route> -->
    {:else}
      <Route path="/">
        <Login />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/forgot">
        <Forgot />
      </Route>
    {/if}

    <Route path="*">
      <NotFound />
    </Route>
  </div>
</Router>

<Footer></Footer>

<style>
  div {
    flex-grow: 1;
    background-color: rgb(71, 68, 68);
  }
</style>