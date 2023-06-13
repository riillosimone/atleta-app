import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Atleta } from 'src/app/module/atleta';
import { AtletaService } from '../atleta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atleta-list',
  templateUrl: './atleta-list.component.html',
  styleUrls: ['./atleta-list.component.css']
})
export class AtletaListComponent implements OnInit, OnDestroy {

  atleti?:Atleta[];
  sub?:Subscription;
  confirmMessage:string = '';

  constructor(private atletaService:AtletaService, private route:ActivatedRoute) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.atletaService.getAllAtleta().subscribe(atletaList => this.atleti = atletaList);
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }

  
}
