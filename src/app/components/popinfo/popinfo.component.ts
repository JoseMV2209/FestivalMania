import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  usuario: boolean = false;
  
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(){

    this.popoverCtrl.dismiss();

  }

}
