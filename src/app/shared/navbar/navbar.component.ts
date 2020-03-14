import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  rol: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.afAuth.authState.subscribe(
      auth => {
        if (auth) {
          this.auth.getUserRole(auth.uid).subscribe(
            userRole => this.rol = userRole.rol
          )
        }
      }
    )
  }

}
