import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  //perURL = 'https://bckndasm.herokuapp.com/per/';
  //perURL = 'http://localhost:8080/per/';
  URL=environment.URL +'per/';

  constructor(private httpCliente: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.httpCliente.get<Persona>(this.URL+'traer/perfil')
  }
  public detail(id: number): Observable<Persona> {
    return this.httpCliente.get<Persona>(this.URL + `detail/${id}`);
  }
  //public save(persona: Persona): Observable<any> {
  //  return this.httpCliente.post<any>(this.URL + 'create', persona);
  //}
  public update(id: number, persona: Persona): Observable<any> {
    return this.httpCliente.put<any>(this.URL + `update/${id}`, persona);
  }
  //public delete(id: number): Observable<any> {
  //  return this.httpCliente.delete<any>(this.URL + `delete/${id}`);
  //}
}
