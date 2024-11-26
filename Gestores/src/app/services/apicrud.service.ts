import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IActividades, IActividad } from 'src/interfaces/Iactividades';
import { IUsuarioRegistrado } from 'src/interfaces/IUsuarioRegistrado'; 

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

  private apiUrl = environment.apiUrl; 

  
  getActividades(): Observable<IActividades[]> {
    return this.httpclient.get<IActividades[]>(`${this.apiUrl}/actividades`);
  }

  postActividades(newActividad: IActividad): Observable<IActividad> {
    return this.httpclient.post<IActividad>(`${this.apiUrl}/actividades`, newActividad);
  }

  getActividadID(id: number): Observable<IActividades> {
    return this.httpclient.get<IActividades>(`${this.apiUrl}/actividades/?id=${id}`);
  }

  putActividades(actividad: any): Observable<IActividades> {
    return this.httpclient.put<IActividades>(`${this.apiUrl}/actividades/${actividad.id}`, actividad);
  }

  deleteActividad(actividad: any): Observable<IActividades> {
    return this.httpclient.delete<IActividades>(`${this.apiUrl}/actividades/${actividad.id}`);
  }


 // AQUI HACIA ABAJO ESTABAMOS PROBANDO UNA FORMA PARA ALMACENAR PERO NO SE PUDO



  getUsuarios(): Observable<IUsuarioRegistrado[]> {
    return this.httpclient.get<IUsuarioRegistrado[]>(`${this.apiUrl}/UsuariosRegistrados`);
  }

  
  postUsuario(newUsuario: IUsuarioRegistrado): Observable<IUsuarioRegistrado> {
    return this.httpclient.post<IUsuarioRegistrado>(`${this.apiUrl}/UsuariosRegistrados`, newUsuario);
  }

  actualizarUsuario(id: number, usuario: IUsuarioRegistrado): Observable<IUsuarioRegistrado> {
    return this.httpclient.put<IUsuarioRegistrado>(`${this.apiUrl}/UsuariosRegistrados/${id}`, usuario, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

