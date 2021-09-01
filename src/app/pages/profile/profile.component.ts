import { ListService } from './../../core/api/list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loading: boolean = true;
  bot: any;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService
    ) { }

  ngOnInit(): void {
    this.getDataBot();
  }

  getDataBot() {
    this.listService.getBotsList(this.route.snapshot.paramMap.get("shortName")).pipe(
      finalize( () => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      })
    ).subscribe( data => {
      this.bot = data[0];
    })
  }

}
