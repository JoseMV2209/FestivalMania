import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../popinfo/popinfo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor(private popCtrl: PopoverController) { }

  ngOnInit() {}

  async mostrarPop(evento){

    const popover = await this.popCtrl.create({

      component: PopinfoComponent,
      event: evento,
      mode: 'ios'

    });

    await popover.present();

  }

}
