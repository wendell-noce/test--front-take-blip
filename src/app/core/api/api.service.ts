import { Observable } from 'rxjs';
import {
    HttpClient,
    HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiService extends HttpClient {
    constructor(handler: HttpHandler) {
        super(handler);
    }
    private apiUrl = environment.apiUrl;

    private buildUrl(endpoint: any) {
        return [this.apiUrl, endpoint].join('/');
    }

    get(
      body?: any | null
    ): Observable<any> {
        let endpoint = body ? this.apiUrl+'?shortName='+ body : this.apiUrl
        return super.get(endpoint);
    }

    post(
        endpoint: string,
        body: any | null,
        options?: any | null
    ): Observable<any> {
        return super.post(this.buildUrl(endpoint), body, options);
    }

    put(
        endpoint: string,
        body: any | null,
        options?: any | null
    ): Observable<any> {
        return super.put(this.buildUrl(endpoint), body, options);
    }

    delete(endpoint: string, options?: any | null): Observable<any> {
        return super.delete(this.buildUrl(endpoint), options);
    }

    patch(
      id: string | null,
        body: any | null
    ): Observable<any> {
        return super.patch( this.buildUrl(id), body);
    }
}
