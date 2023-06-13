import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Atleta } from 'src/app/module/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor() { }

  ATLETA_MOCK: Atleta [] = [
    {id:1,nome:'Giovanni',cognome:'Cipolla',inAttivita:true,dataUltimaGara: new Date('2023-6-11'),numeroMedaglieVinte:5},
    {id:2,nome:'Giulia',cognome:'Cimino',inAttivita:true,dataUltimaGara: new Date('2023-6-12'),numeroMedaglieVinte:10},
    {id:3,nome:'Lorenzo',cognome:'Granata',inAttivita:false,dataUltimaGara: new Date('2022-5-11'),numeroMedaglieVinte:20},
    {id:4,nome:'Simone',cognome:'Riillo',inAttivita:false,dataUltimaGara: new Date('2023-05-19'),numeroMedaglieVinte:2}
  ];

  getAllAtleta(): Observable<Atleta[]> {
    return of(this.ATLETA_MOCK);
  }

  getAtleta(id: number): Observable<Atleta | undefined> {
    const atleta = this.ATLETA_MOCK.find(atletaItem => atletaItem.id === id);
    return of(atleta);
  }

  create(atletaInput: Atleta): Observable<Atleta> {
    const newId: number = Math.max.apply(Math, this.ATLETA_MOCK.map(atletaItem => atletaItem.id ? atletaItem.id : 1));
    atletaInput.id = newId + 1;
    this.ATLETA_MOCK.push(atletaInput);
    return of(atletaInput);
  }


}
