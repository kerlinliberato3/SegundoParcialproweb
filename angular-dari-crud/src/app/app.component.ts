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
    
    
  ]
  
  selecproductos: Productos = new Productos();

  abrir(productos: Productos){
    this.selecproductos = productos;
  }

  addoeditar(){
   if(this.selecproductos.id===0){ 
    this.selecproductos.id= this.productoArray.length+1;
    this.productoArray.push(this.selecproductos);
  }
    this.selecproductos = new Productos();
}
 
eliminar(){
  this.productoArray = this.productoArray.filter(x => x != this.selecproductos);
  this.selecproductos = new Productos();
}

}
