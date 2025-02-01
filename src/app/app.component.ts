import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { UpdateThemeSettings } from './ngrx/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cartzilla';
  constructor(
    // private socket:Socket,
    private ngrx:Store
    ){
    
  }

  ngOnInit(): void {
    // this.connectServer()
  }

  // connectServer() {
  //   // this.socket.connect()
  //   this.socket.emit('fetchSettings',environment.userid)
  //   this.socket.on('settings',(data: any)=>{
  //     this.ngrx.dispatch(UpdateThemeSettings(data))
  //   })
  // }

  ngOnDestroy(): void {
    console.log('on')
    // this.socket.disconnect()
  }

}
