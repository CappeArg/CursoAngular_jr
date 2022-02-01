import { Component } from '@angular/core';


@Component({

    selector:'app-body',
    templateUrl:'./body.component.html'
    

})


export class BodyComponent{
    mostrar=true;
    frase:any={
        mensaje:'Es mejor la peor de las realidades que la mejor de las fantasías',
        autor: 'Mi Superyo'
    };

    sujetos:string[]=['Padre', 'Madre', 'Yo'];
}