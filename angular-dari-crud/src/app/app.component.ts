import { Component } from '@angular/core';
import {Productos} from './mod/productos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dari-crud';

  productoArray: Productos[] = [
    {id: 1, name: "Dariel", pais: "RD"},
    {id: 1, name: "Juan", pais: "RD"},
    {id: 1, name: "Juan", pais: "RD"}
  ]

}
