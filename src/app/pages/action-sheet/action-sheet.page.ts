import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public alertController : AlertController, private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  async onClick() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Crear usuario',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          label: 'hola',
          placeholder: 'Nombre'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Apellidos'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Dirección'
        },
        {
          name: 'name5',
          type: 'text',
          id: 'name5-id',
          placeholder: 'Comuna'
        },
        {
          name: 'name6',
          type: 'text',
          id: 'name6-id',
          placeholder: 'Región'
        },
        {
          name: 'name3',
          type: 'url',
          placeholder: 'Correo'
        },
        
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Contraseña 8 caracteres',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 8,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Ok',
          
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
