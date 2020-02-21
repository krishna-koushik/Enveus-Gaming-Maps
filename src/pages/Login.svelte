<script>
  import AuthService from '../services/AuthService';
  let email = '';
  let password = '';
  function login(e) {
    e.preventDefault();
    AuthService.login(email, password);
  }
</script>

<div class='login-form'>
  <form class='form' on:submit={login}>
    <h1>Login</h1>
    <input class='input is-primary' bind:value={email} type="text" autocomplete="username" title="Email Address" placeholder="Email Address" />
    <input class='input is-primary' bind:value={password} type="password" autocomplete="current-password" title="Password" placeholder="Password" />
    
    <button type="submit" class="button is-primary">Login</button>
    <button class="button is-link">Link</button>

    <p>
      <a class="forgot" href="/auth/forgot">Forgot Username/Password?</a>
    </p>
  </form>
</div>

<style>
  div {
    display: flex;
    width: 50%;
    height: 100%;
    margin: auto;
    align-items: center;
  }

  h1 {
    font-size: 2em;
    /* text-align: center; */
  }

  input:nth-of-type(2) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>