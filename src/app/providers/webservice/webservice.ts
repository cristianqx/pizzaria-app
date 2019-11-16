import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/retry';
import { ENDPOINT_LOGIN } from '../../endpoint-constants';

@Injectable()
export class WebserviceProvider {

    constructor(public http: HttpClient) {
    }

}