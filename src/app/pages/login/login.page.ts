import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedatosService, Usuarios } from 'src/app/services/servicedatos.service';
import { Platform , ToastController, IonList , MenuController } from '@ionic/angular';
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
              private plt: Platform, private toastController: ToastController,
              private menuController: MenuController, 
              public authService: AuthService) { 
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

  mostrarMenu(){
        this.menuController.open('first');
      }



//get
loadDatos(){
  this.storageService.getDatos().then(usuarios=>{
    this.usuarios=usuarios;
  });
}



//buscar usuario
buscarUsuario(email: string,contrasenia:string){
    this.storageService.buscarUsuario(email,contrasenia);
} 





async showToast(msg){
  const toast = await this.toastController.create({
    message: msg, 
    duration: 2000
  });
  toast.present();
}



}
