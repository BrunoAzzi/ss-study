import { Injectable } from '@angular/core';

import { User } from './../models/user.model'

import { HttpClientService } from './http-client.service';

@Injectable()
export class UserService {

    private endpoint = "/users";

    constructor(private service: HttpClientService) {}

    getUsers() {
        return this.service.get(this.endpoint)
            .map((response) => {
                return response.users;
			});
    }
}