import { Component, OnInit } from '@angular/core';

import { INoticia } from 'src/app/interfaces/iNoticia';
import { Festival } from 'src/app/interfaces/iFestival';
import { FirebaseService } from '../../services/firebase.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  noticias: INoticia[];
  festivales: Festival[];
  iUsed: number[];

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {

    this.firebase.getNoticas().subscribe(res => {
      this.iUsed = new Array;

      if(res.length > 4){
        for(let i = 0; i < 4; i++){
          let random = Math.floor(Math.random() * res.length);

          if(this.iUsed.indexOf(random) == -1){

            this.noticias.push(res[random]);
            this.iUsed.push(random);

          }
        }
      }else{
        this.noticias = res;
      }
    });

    this.firebase.getFestivales().subscribe(res => {
      this.iUsed = new Array;
      this.festivales = new Array;
      
      if(res.length > 4){
        for(let i = 0; i < 4; i++){
          let random = Math.floor(Math.random() * res.length);

          if(this.iUsed.indexOf(random) == -1){
            
            this.festivales.push(res[random]);
            this.iUsed.push(random);

          }
        }
      }else{
        this.festivales = res;
      }
    });

  }

}
