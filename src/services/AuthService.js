import { Auth, Functions } from '../firebase';

import { user } from '../stores';

class AuthService {
  static async login(email, password) {
    const authUser = await Auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    if (authUser) {
      user.set(authUser)
    }
  }

  static async register(email, password) {
    return Functions.addTempUser({ email, password });
  }
}

export default AuthService;