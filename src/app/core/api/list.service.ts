import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private apiService: ApiService) { }

  getBotsList(id = ""): Observable<any> {
    return this.apiService.get(id);
  }

  addRemoveFavorite(id:string, val: boolean): Observable<any> {
    return this.apiService.patch(id, {
      "favorite": val,
    });
  }
}
