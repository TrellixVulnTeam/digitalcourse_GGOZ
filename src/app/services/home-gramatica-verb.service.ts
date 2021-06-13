import { EstruturaFrase } from '../models/estrutura-frase';
import { Observable } from 'rxjs';
import { ResumoDTO } from './../pages/modulo1/home/gramatica/home-gramatica/models/Resumo-DTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Pages } from '../models/pages';
import { AtividadeVerbo } from '../models/atividade-verbo';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HomeGramaticaVerbService {

  constructor(private http: HttpClient,) { }
  resumoverb(): Promise<ResumoDTO> {
    return this.http.get<ResumoDTO>(`${API_CONFIG.baseUrl}/gramatica/resumoverbos`).toPromise();
  }

  loadverbsaberto(name: string, page: number): Promise<Pages> {
    return this.http.get<Pages>(`${API_CONFIG.baseUrl}/gramatica/listverbosabertos?name=${name}&page=${page}&size=10&sort=palavraingles,ASC`).toPromise();
  }

  loadverbsconcluido(name: string, page: number): Promise<Pages> {
    return this.http.get<Pages>(`${API_CONFIG.baseUrl}/gramatica/listverbosconcluidos?name=${name}&page=${page}&size=10&sort=palavraingles,ASC`).toPromise();
  }
  async findAtividadeVerboId(id): Promise<AtividadeVerbo> {
    return await this.http.get<AtividadeVerbo>(`${API_CONFIG.baseUrl}/gramatica/findatividadeverboid?id=${id}`).toPromise();

  }
  ontranlator(direcao, texto): Promise<EstruturaFrase> {
    return this.http.get<EstruturaFrase>(`${API_CONFIG.baseUrl}/usuarios/${direcao}?texto=${texto}`).toPromise();

  }

  saveAtividadeVerbo(obj: AtividadeVerbo): Promise<any> {
    return this.http.post(`${API_CONFIG.baseUrl}/gramatica/saveatividadeverboregular`, obj).toPromise();
  }
  concluirAtividadeVerbo(obj: AtividadeVerbo) {
    return this.http.post(`${API_CONFIG.baseUrl}/gramatica/finalizaratividadeverbo`, obj);
      
  }
}
