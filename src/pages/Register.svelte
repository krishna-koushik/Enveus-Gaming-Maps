<script>
  import { navigate, link } from 'svelte-routing';
  import AuthService from '../services/AuthService';

  let email = '';
  let password = '';
  let passwordConfirmation = '';
  let promise;

  function register(e) {
    e.preventDefault();
    promise = applyRegistration();
  }

  async function applyRegistration(e) {
    if (!email) {
      throw new Error('Email must be provided');
    }

    if (!password) {
      throw new Error('Password must be provided and confirmed');
    }

    if (password !== passwordConfirmation) {
      throw new Error('Password and confirmation are not the same');
    }

    await AuthService.register(email, password);
    console.log('Created user entry, please wait for account approval');
  }
</script>

<body>
  <div class='registration-form'>
    <form class='form' on:submit={register}>
      <h1>Register</h1>

      {#if promise}
        {#await promise}
          <p>Sending information...</p>
        {:then response}
          <p>Response is {response}</p>
        {:catch error}
          <p class="is-danger error">{error.message}</p>
        {/await}
      {/if}

      <input class='input is-primary' bind:value={email} type="text" autocomplete="username" title="Email Address" placeholder="Email Address" />
      <input class='input is-primary' bind:value={password} type="password" autocomplete="current-password" title="Password" placeholder="Password" />
      <input class='input is-primary' bind:value={passwordConfirmation} type="password" title="Password" placeholder="Confirm Password" />
      
      <button type="submit" class="button btn is-success">Register</button>

      <p>
        Already have an account?
        <a class="forgot" href="/login" use:link>Login now</a>
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

  input:not(:first-child) {
    margin-top: 10px;
    /* margin-bottom: 10px; */
  }

  input:last-of-type {
    margin-bottom: 10px;
  }

  input::placeholder {
    color: rgb(53, 50, 50);
  }

  .registration-form{
    background: rgba(0,0,0,.8);
    padding: 20px;
  }
</style>