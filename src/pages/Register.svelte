<script>
  import AuthService from '../services/AuthService';
  let email = '';
  let password = '';
  function register() {
    console.log('Registering');
  }
</script>

<form class='form' on:submit={register}>
  <h1>Register</h1>
  <input bind:value={email} autocomplete="username" type="text" placeholder="Email Address"/>
  <input bind:value={password} autocomplete="current-password" type="password" placeholder="Password"/>
  <button>Register</button>
  <p class="message">Already registered? <a href="/auth/login">Sign In</a></p>
</form>