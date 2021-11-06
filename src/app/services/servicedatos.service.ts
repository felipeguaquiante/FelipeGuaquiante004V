import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


import { ToastController} from '@ionic/angular';

export interface Usuarios{
  id: number,
  nombre: string,
  email: string,
  contrasenia: string

}

const ITEMS_KEY = 'my-datos';

@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  private _storage : Storage;

  constructor(private storage: Storage, private toastController: ToastController) { 
    this.init();
  }
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;

  }

  addDatos(dato: Usuarios):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos : Usuarios[])=>{
       if (datos) {
         datos.push(dato);
         return this.storage.set(ITEMS_KEY, datos);
       }else {
         return this.storage.set(ITEMS_KEY, [dato]);
       }
 
     })
   }
 
    //Nos permmite obtener la información almacenada en el storage 
    //por medio de sus keys 
 
    getDatos(): Promise<Usuarios[]>{
     return this.storage.get(ITEMS_KEY);
   }
 
 
   //actualizar información de un objeto 
   updateDatos(dato: Usuarios): Promise<any>{
     return this.storage.get(ITEMS_KEY).then((datos : Usuarios[])=>{
       if (!datos || datos.length == 0){
         return null;
       }
       let newDato: Usuarios[] = [];
       for (let i of datos){
         if (i.id === dato.id){
           newDato.push(dato);
         }
         else{
           newDato.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY, newDato);
     });
   }

   //Buscar por nombre
   buscarUsuario(iemail: string, icontrasenia:string):String{
    let valor="";
    this.storage.get(ITEMS_KEY).then((datos : Usuarios[])=>{
      if (!datos || datos.length === 0){
        return null;
      }
      let toKeep: Usuarios[] = []; 
      for (let i of datos){
        toKeep.push(i)
        if (i.email === iemail && i.contrasenia === icontrasenia){
           valor=i.email;
           this.showToast("Bienvenido "+i.nombre);
           break;
        }
      }
      if(valor===""){
        this.showToast("Usuario y/o contraseña son incorrectos.");
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
    
    return valor;
  }
 
    //Eliminar
   deleteDatos(id: number): Promise<Usuarios>{
     return this.storage.get(ITEMS_KEY).then((datos : Usuarios[])=>{
       if (!datos || datos.length === 0){
         return null;
       }
       let toKeep: Usuarios[] = []; 
       for (let i of datos){
         if (i.id !== id){
           toKeep.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY, toKeep);
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
