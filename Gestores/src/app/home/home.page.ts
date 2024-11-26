import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('Swiper')
  swiperRef:ElementRef | undefined;
  swiper?:Swiper;

  images =[
      'assets/evento1.jpg',
      'assets/EventoInicio2.jpg',
      'assets/TallerRobotica.jpg',




  ];
 

  constructor() {}

}
