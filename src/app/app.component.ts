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
  constructor() {}

  componentes : Componente [] = [
    {
      icon: 'paw-outline',
      name: 'Crear cuenta',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'sunny-outline',
      name: 'Buscar comprador',
      redirecTo: '/alert'
    },

  ];
  
}
