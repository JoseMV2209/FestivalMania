import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Festival } from 'src/app/interfaces/iFestival';
import { FirebaseService } from '../../services/firebase.service'

@Component({
  selector: 'app-all-festival',
  templateUrl: './all-festival.page.html',
  styleUrls: ['./all-festival.page.scss'],
})
export class AllFestivalPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  fetivals: Festival[];

  abecedario: string[] = [
    "A","B","C","D",
    "E","F","G","H",
    "I","J","K","L",
    "M","N","Ñ","O",
    "P","Q","R","S",
    "T","U","V","W",
    "X","Y","Z"
  ];

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {

    this.firebase.getFestivales().subscribe(res => {
      this.fetivals = res;
    });

  }

/*   loadData(event){
    console.log("Cargando siguientes...");

    setTimeout(() =>{

      if(this.fetivals.length == this.fetivals.length ){
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      event.target.complete();

    }, 1000);
  } */

}