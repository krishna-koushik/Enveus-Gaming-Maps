<script>
  import { navigate } from 'svelte-routing';
  import AuthService from '../services/AuthService';
  let email = '';
  let password = '';
  async function login(e) {
    e.preventDefault();
    await AuthService.login(email, password);
    navigate('/');
  }
</script>

<body>
  <div class='login-form'>
    <form class='form' on:submit={login}>
      <h1>Login</h1>
      <input class='input is-primary' bind:value={email} type="text" autocomplete="username" title="Email Address" placeholder="Email Address" />
      <input class='input is-primary' bind:value={password} type="password" autocomplete="current-password" title="Password" placeholder="Password" />
      
      <button type="submit" class="button is-primary">Login</button>

      <p>
        <a class="forgot" href="/forgot">Forgot Username/Password?</a>
      </p>
    </form>
  </div>
</body>

<style>
  div {
    display: flex;
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

  input::placeholder {
    color: rgb(53, 50, 50);
  }

  .login-form{
    background: rgba(0,0,0,.8);
    padding: 20px;
  }
</style>