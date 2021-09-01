import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bot-card',
  templateUrl: './bot-card.component.html',
  styleUrls: ['./bot-card.component.scss']
})
export class BotCardComponent implements OnInit {

  @Input() bots: any;
  @Input() inlineCard: boolean;

  @Output() favoriteEvent = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addRemoveFavorite(id: number, isFavorite: boolean) {
    const body = {
      id: id,
      favorite: isFavorite
    }

    this.favoriteEvent.emit(body);
  }

  navigateToProfile(id){
    this.router.navigate(['./profile/'+ id]);
  }

}
