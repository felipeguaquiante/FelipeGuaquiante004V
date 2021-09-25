import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

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

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
