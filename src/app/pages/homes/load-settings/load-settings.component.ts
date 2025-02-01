import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ThemeSettings } from 'src/app/ngrx/reducers';
import { selectThemeSettings } from 'src/app/ngrx/selectors';
import { HomeService } from '../home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-load-settings',
  templateUrl: './load-settings.component.html',
  styleUrls: ['./load-settings.component.scss']
})
export class LoadSettingsComponent implements OnInit {

  constructor(
    private ngrxStore: Store,
    private router:Router,
    private homeServices:HomeService
  ){}

  ngOnInit(): void {
    this.fetchSettings()
    // this.ngrxStore.select(selectThemeSettings).subscribe({
    //   next:(response:any)=>{
    //     if(response){
    //       this.router.navigate([response.theme.style])
    //     }
        
    //     console.log(response)
    //   },
    //   error:(err)=>{
    //     console.log(err)
    //   }
    // })
  }

  /**
   * Fetching theme settings from BE, and updates to the State
   */
  fetchSettings(){
    // let userid = environment.userid??null;
    // this.ngrxStore.select(selectThemeSettings).subscribe((settings:any)=>{
    //   if(settings.theme.style){
    //     this.router.navigate([settings.theme.style])
    //   }
    //   else{
        this.router.navigate(['/store'])
    //   }
    // })
    // this.router.navigate(['/'])
    // 
    // this.homeServices.loadThemeSettings(userid).subscribe({
    //   next:(response)=>{
    //     console.log(response)
    //   },
    //   error:(err)=>{
    //     console.log(err)
    //   }
    // })
  }

}
