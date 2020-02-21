<script>
  import Router from 'svelte-spa-router';

  // Components
  import Nav from './components/Nav.svelte';
  import Footer from './components/Footer.svelte';

  // Pages/Routes
  import Welcome from './pages/Welcome.svelte';
  import Login from './pages/Login.svelte';
  import Register from './pages/Register.svelte';
  import Map from './pages/Map.svelte';
  import NotFound from './pages/NotFound.svelte';

  const routes = {
    '/': Welcome,
    '/login': Login,
    '/register': Register,
    '/map': Map,
    '*': NotFound, // Catch-all
  }
</script>

<Nav></Nav>

<div>
  <Router routes={routes}></Router>
</div>

<Footer></Footer>

<style>
  div {
    flex-grow: 1;
    background-color: rgb(71, 68, 68);
  }
</style>