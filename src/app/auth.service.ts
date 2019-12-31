export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          resolve(this.loggedIn);
        }, 500);
      }
    );
    return promise;
  }
  login() {
    return this.loggedIn = true;
  }
  logout() {
    return this.loggedIn = false;
  }
}
