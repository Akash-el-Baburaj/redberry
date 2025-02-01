import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThemeSettings } from 'src/app/ngrx/reducers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private APIEndpoint = environment.APIEndpoint

  constructor(
    private http:HttpClient
  ) { }

  loadThemeSettings(userid:string){
    return this.http.get<ThemeSettings>(`${this.APIEndpoint}/themesettings?userid=${userid}`)
  }

}
