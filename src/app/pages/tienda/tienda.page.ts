import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  

    constructor(private menuController: MenuController,public alertController : AlertController) {}
      ngOnInit() {
      }  
      mostrarMenu(){
        this.menuController.open('first');
      }
    async venta() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Venta',
        message: 'Favor ingresar kg a vender',
        inputs: [
          {
            name: 'name1',
            type: 'number',
            placeholder: 'Kg'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Vender',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
  
      await alert.present();
    }
  

}
