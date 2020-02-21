import { Auth } from '../firebase';

import { user } from '../stores';

class AuthService {
  static async login(email, password) {
    console.log(email, password);

    const authUser = await Auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    console.log(authUser);

    if (authUser) {
      user.set(authUser)
    }
  }
}

export default AuthService;