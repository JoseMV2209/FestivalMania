import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { FirebaseFestivalesService } from '../../services/firebase-festivales.service';
import { FirebaseNoticiasService } from '../../services/firebase-noticias.service';
import { Festival } from '../../interfaces/iFestival';
import { INoticia } from '../../interfaces/iNoticia';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.page.html',
  styleUrls: ['./festival.page.scss'],
})
export class FestivalPage implements OnInit {

  festival: Festival;
  noticias: INoticia[] = new Array;
  festivalId: string = null;
  notiEncontra: boolean = false;


  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private nav: NavController,
    private firebaseNoti: FirebaseNoticiasService,
    private firebaseFesti: FirebaseFestivalesService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {

    this.festivalId = this.route.snapshot.params['id'];

    if(this.festivalId){
      this.loadFestival();
      this.searchNews();
    }

  }

  searchNews(){

    this.firebaseNoti.getNoticas().subscribe(res => {
      
      for(let i = 0; i < res.length; i++){

        if(res[i].refFestivales.indexOf(this.festivalId) != -1){
          this.noticias.push(res[i]);
          this.notiEncontra = true;
        }

      }

    });
  }


  /* Cargando el festival elegido mediante id */

  async loadFestival(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });

    await loading.present();

    this.firebaseFesti.getFestival(this.festivalId).subscribe(res => {
      
      this.festival = res;
      loading.dismiss();

    });
  }

  
  // Opicion de un festival en formato Action Sheet

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones Festival',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          this.presentAlertConfirm();
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  // Funcion para el alert del borrado de favoritos del Action Sheet.

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
