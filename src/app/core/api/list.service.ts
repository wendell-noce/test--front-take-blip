import { Bot } from './../model/bot.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private apiService: ApiService) { }

  getBotsList(id = ""): Observable<Bot> {
    return this.apiService.get(id);
  }

  addRemoveFavorite(id:string, val: boolean): Observable<Bot> {
    return this.apiService.patch(id, {
      "favorite": val,
    });
  }
}
