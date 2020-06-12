import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-festival',
  templateUrl: './all-festival.page.html',
  styleUrls: ['./all-festival.page.scss'],
})
export class AllFestivalPage implements OnInit {

  fetivals: Festival[] = [
    {
      image: "../../../assets/icon/festardor-170x170.png",
      name: "Festardor",
      redirectTo: "/festival",
      nAbecedario: 5
    },
    {
      image: "../../../assets/icon/FIB_170x170.png",
      name: "Festival Intenaciol de Benicassim",
      redirectTo: "/festival",
      nAbecedario: 5
    },
    {
      image: "../../../assets/icon/iconArenalSound.png",
      name: "Arenal Sound",
      redirectTo: "/festival",
      nAbecedario: 0
    },
    {
      image: "../../../assets/icon/Icono-Viña-Rock_170x170.png",
      name: "Viña Rock",
      redirectTo: "/festival",
      nAbecedario: 22
    },
    {
      image: "../../../assets/icon/iconResussrectionFest_170x170.png",
      name: "Resurrection Fest",
      redirectTo: "/festival",
      nAbecedario: 18
    },
    {
      image: "../../../assets/icon/Feslloch_200x200.png",
      name: "Feslloc",
      redirectTo: "/festival",
      nAbecedario: 5
    },
    {
      image: "../../../assets/icon/RototomSunsplash_170x170.png",
      name: "Rototom Sunsplash",
      redirectTo: "/festival",
      nAbecedario: 18
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Festival {

  image: string;
  name: string;
  redirectTo: string;
  nAbecedario: number;

}