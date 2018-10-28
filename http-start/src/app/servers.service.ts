import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";

@Injectable()
export class ServersService {
    constructor(private http: Http) {
    }

    storeServers(servers: any[]) {

        const headers = new Headers({'content-type': 'application/json'});

        // return this.http.post('https://udemy-ng-http-2c87b.firebaseio.com/data.json', 
        // servers,
        // { headers: headers }
        // );

        return this.http.put('https://udemy-ng-http-2c87b.firebaseio.com/data.json', 
        servers,
        { headers: headers }
        );
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-2c87b.firebaseio.com/data')
            .pipe(map((response: Response) => {
                const data = response.json();
                return data;
            }))
            .pipe(catchError((error: Response) => {
                console.log(error);
                return throwError('Erroreeeeeeeeee');
            }));
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-2c87b.firebaseio.com/appName.json')
            .pipe(map((response: Response) => {
                return response.json();
            }));
    }

}