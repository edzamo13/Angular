import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  /*
existe 3
canActivete devuelve un true
CanDeactive puede dejar una ruta
reSolver permite proporciona datos antes
de ir a una ruta
*/

  constructor(
    private _router: Router
  ) { }


  canActivate() {
    if (this.userAuthenticated()) {
      return true;
    }
    this._router.navigate(['/home/login']);
    return false;
  }

  private userAuthenticated(): boolean {
   // return false;
   return true;
  }
}
