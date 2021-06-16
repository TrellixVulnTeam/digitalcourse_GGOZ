import { Observable } from 'rxjs';
import { FraseAllsituations } from './../models/frase-allsituations';
import { SentencesSituacao } from './../models/sentences-situacao';
import { AtividadeSentencesAllSit } from './../models/atividade-sentences-all-sit';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { API_CONFIG } from '../config/api.config';
import { Pages } from '../models/pages';
import { AtividadeSentencesAllSitDTO } from '../models/atividade-sentences-all-sit-dto';
@Injectable({
  providedIn: 'root'
})
export class Modulo2Service {
  atividadeSentencesAllSit:AtividadeSentencesAllSit;
  id_atividadeSentencesAllSit:string;
  situacao?: SentencesSituacao;

  constructor(private http: HttpClient,) { }
  listatividadesopen(page: number): Promise<Pages> {
    return this.http.get<Pages>(`${API_CONFIG.baseUrl}/sentencasallsitucao/pageable?page=${page}&size=20&sort=situacao,ASC`).toPromise();
  
  }
  findbyidsentencesallsit(id):Promise<AtividadeSentencesAllSit>{
    return this.http.get<AtividadeSentencesAllSit>(`${API_CONFIG.baseUrl}/sentencasallsitucao/findbyidsentencesallsit?id=${id}`).toPromise();
  }
  save(idsentenca,frase:FraseAllsituations):Promise<FraseAllsituations>{
    return this.http.post<FraseAllsituations>(`${API_CONFIG.baseUrl}/sentencasallsitucao/save?idativ=${this.atividadeSentencesAllSit.id}&idsentenca=${idsentenca}`,frase)
    .toPromise();
  
  }
}
