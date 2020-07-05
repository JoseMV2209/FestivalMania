import { Component, OnInit } from '@angular/core';
import { Options } from 'src/app/interfaces/iOptions';
import { FirebaseMenuService } from '../../services/firebase-menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  optionMenu: Options[];

  constructor(private firebaseMenu: FirebaseMenuService) { }

  ngOnInit() {

    this.firebaseMenu.getMenuOptions().subscribe(res => {
      this.optionMenu = res;
    });

  }

}
