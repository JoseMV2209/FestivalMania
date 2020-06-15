import { Component, OnInit } from '@angular/core';
import { Options } from 'src/app/interfaces/iOptions';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  optionMenu: Options[];

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {

    this.firebase.getMenuOptions().subscribe(res => {
      this.optionMenu = res;
    });

  }

}
