import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LogPreventService {
  private baseUrl = "http://localhost:4200/api";

  constructor(private http: HttpClient) {}

  getListalogPrevents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/todosLogs`);
  }

  createLogPrevent(logPrevent: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/criarLog`, logPrevent);
  }
}
