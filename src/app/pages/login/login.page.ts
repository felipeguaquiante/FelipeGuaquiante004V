import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedatosService, Usuarios } from 'src/app/services/servicedatos.service';
import { Platform , ToastController, IonList , MenuController , AlertController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  usuarios: Usuarios[] = [];
  newUsuarios: Usuarios = <Usuarios>{};
  usuarioLogueado=false;
  

  @ViewChild('myList')myList : IonList;

  constructor(private storageService: ServicedatosService, 
    private plt: Platform, private toastController: ToastController,private menuController: MenuController,private alertController:AlertController, public authService: AuthService) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });

    }

    
  ngOnInit() {
    this.usuarioLogueado = this.authService.isLoggedIn('');
    this.authService.changeLoginStatus$.subscribe((loggedStatus: boolean)=>{
      this.usuarioLogueado=loggedStatus;
    })
  }

  logout(){
    this.authService.logout();
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
    this.showToast('!Usuario Agregado');
    this.loadDatos();
  });
}

//buscar usuario
buscarUsuario(email: string,contrasenia:string){
    this.storageService.buscarUsuario(email,contrasenia);
} 

//update
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
