import { Component, OnInit, ViewChild } from '@angular/core';

import { ServicedatosService, Usuarios } from 'src/app/services/servicedatos.service';
import { Platform , ToastController, IonList , MenuController , AlertController} from '@ionic/angular';


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
    private plt: Platform, private toastController: ToastController,private menuController: MenuController,private alertController:AlertController) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });

    }

  ngOnInit() {
  }
  onSubmit(){
    console.log("submit");
    console.log(this.usuarios);
    this.addDatos();
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

//update
buscarUsuario(usuarios: Usuarios ){
  this.storageService.updateDatos(usuarios).then(item=>{
    this.showToast('Bienvenido '+usuarios.nombre)
    this.saludoAlert(usuarios.nombre)
    this.myList.closeSlidingItems();
    this.loadDatos();
  });
} 

//buscar usuario
updateDatos(dato: Usuarios ){
  dato.nombre = `UPDATED: ${dato.nombre}`;
  this.storageService.updateDatos(dato).then(item=>{
    this.showToast('Usuario actualizado!')
    this.myList.closeSlidingItems();
    this.loadDatos();
  });
} 

//delete
deleteDatos(usuarios: Usuarios){
  this.storageService.deleteDatos(usuarios.id).then(item=>{
    this.showToast('Usuario eliminado');
    this.myList.closeSlidingItems();
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


async saludoAlert(nombre: string){
  const alert = await this.alertController.create({
    header: 'Welcome',
    message: 'Bienvenid@ '+nombre,
    buttons: ['OK']
  });
  await alert.present();
}
}
