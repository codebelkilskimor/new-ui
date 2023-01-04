import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Respuestainvestigadores } from '../interfaces/investigadores';
import { Respuestauninvestigador } from '../interfaces/investigador';

export const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class InvestigadoresService {
  constructor(private http: HttpClient) {}

  getInvestigadores(data: any) {
    return this.http.post<Respuestainvestigadores>(
      `${API_URL}/investigadores`,
      data
    );
  }

  getInvestigador(id: string) {
    return this.http.get<Respuestauninvestigador>(
      `${API_URL}/investigadores/${id}`
    );
  }
}
