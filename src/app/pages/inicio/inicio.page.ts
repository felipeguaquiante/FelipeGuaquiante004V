import { Component, OnInit } from '@angular/core';
import { TeslaService } from 'src/app/services/tesla.service';
import { Article } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


    noticias: Article[]=[]
    

  constructor(private noticiaTesla: TeslaService,private menuController: MenuController) { }

  ngOnInit() {
    this.noticiaTesla.getTopHeadLines().subscribe(resp=>{
      console.log('noticias',resp);
      this.noticias.push(...resp.articles);
    });
  }
  mostrarMenu(){
        this.menuController.open('first');
      }

}
