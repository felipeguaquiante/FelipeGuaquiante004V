import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[] = [
    
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
      },
    {
      icon: 'american-football',
      name: 'Tienda',
      redirecTo: '/tienda'
      },
    {
      icon: 'paw-outline',
      name: 'Registro',
      redirecTo: '/registro'
      },
    {
   
      icon: 'log-in',
      name: 'login',
      redirecTo: '/login'
      },
    {
      icon: 'barcode',
      name: 'Maestro',
      redirecTo: '/maestro'
      }
  ];

  constructor() {}

 
  
}
