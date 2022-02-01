import { Component,  } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio:number;
  autor:string;

  constructor(){
    this.anio=  new Date().getFullYear();
    this.autor= 'Pablo Andrés Cappellacci';

  }
}
