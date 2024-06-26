import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public login(usuario: Usuario): Observable<number> {
    return of(Math.random() * (1000 - 0));
  }
}
