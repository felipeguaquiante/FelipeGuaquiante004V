import { Component, OnInit, ViewChild } from '@angular/core';

import { ServicedatosService, Usuarios } from 'src/app/services/servicedatos.service';
import { Platform , ToastController, IonList , MenuController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuarios: Usuarios[] = [];
  newUsuarios: Usuarios = <Usuarios>{};

  @ViewChild('myList')myList : IonList;

 

  constructor(private storageService: ServicedatosService, 
    private plt: Platform, private toastController: ToastController,private menuController: MenuController) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });

    }

  ngOnInit() {
  }
  onSubmit(){
    this.addDatos();
    this.loadDatos();
  }
  mostrarMenu(){
        this.menuController.open('first');
      }



//get
loadDatos(){
  this.storageService.getDatos().then(usuarios=>{
    this.usuarios=usuarios;
  });
}

 //create
 addDatos(){
  this.newUsuarios.id = Date.now();
  this.storageService.addDatos(this.newUsuarios).then(usuario=>{
    this.newUsuarios = <Usuarios>{};
    this.showToast('!Usuario Agregados');
    this.loadDatos();
  });
}




async showToast(msg){
  const toast = await this.toastController.create({
    message: msg, 
    duration: 2000
  });
  toast.present();
}



}
