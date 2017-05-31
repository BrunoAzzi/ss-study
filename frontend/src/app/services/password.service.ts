import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { HttpClientService } from "./http-client.service";
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class PasswordService {

  constructor(private service: HttpClientService) { }

  startRecover(email: String) {
    return this.service.post('/password/recover', JSON.stringify({ email: email }))
  }

  overwritePassword(password: String, token: String) {
    return this.service.post('/password/update', JSON.stringify({ password: password, token: token }))
      .map((obj) => {
          if (obj.user && obj.user.token) {
              Cookie.set('auth_token', obj.user.token);
          }
      });
  }

}
