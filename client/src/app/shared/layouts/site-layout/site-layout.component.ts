import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent {

  constructor (private auth: AuthService) {

  }

  logout() {
    this.auth.logout()
  }
}
