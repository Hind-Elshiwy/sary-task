import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sary';
  status = 'ONLINE';
  isConnected = true;
 
  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    ) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
        this.router.navigate(['/home'])

      }
      else {
        this.status = "OFFLINE";
        this.router.navigate(['/internet-connection'])
      }
    })
  }
}
