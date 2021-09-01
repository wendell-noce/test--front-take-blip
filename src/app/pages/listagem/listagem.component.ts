import { ListService } from './../../core/api/list.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  search: string;

  listBots: any = [];
  listFavoritebots: any = [];

  gridType: boolean = false;
  loading: boolean = true;

  constructor( private listService: ListService) { }

  ngOnInit(): void {
    this.getBots();
  }

  getBots() {
    this.listService.getBotsList().subscribe( data => {
      this.sortbyFavorites(data);
      this.loading = false;
    })
  }

  sortbyFavorites(data){;
    data.map(bot => {
      if(bot.favorite) {
        this.listFavoritebots.push(bot)
      } else {
        this.listBots.push(bot);
      }
    })
  }

  sortByName(){
    this.loading = true;

    this.listBots.sort((a, b) => a.name.localeCompare(b.name))
    this.listFavoritebots.sort((a, b) => a.name.localeCompare(b.name))

    setTimeout(() => {
      this.loading = false;
    }, 700);
  }

  sortByDate() {
    this.loading = true;

    this.listBots.sort((a, b) => a.created.localeCompare(b.created))
    this.listFavoritebots.sort((a, b) => a.created.localeCompare(b.created))

    setTimeout(() => {
      this.loading = false;
    }, 700);
  }

  addRemoveFavorite(obj: any) {
    const botId = obj.id;
    const favorite = obj.favorite ? false : true;
    this.loading = true;

    this.listService.addRemoveFavorite(botId, favorite).subscribe()
  }
}
