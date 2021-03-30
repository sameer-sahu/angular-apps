import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
    constructor(private httpClient: HttpClient) {}

    getPosts() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
        .map(response => response)
          .catch(
            (error: Response) => {
              return Observable.throw('Something went wrong');
            }
          );
    }
}