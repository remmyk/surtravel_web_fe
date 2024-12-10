import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from '../../modelos/local';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent implements OnInit {

  @Input() height = 700;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [
    {
        id : 0,
        titlefirst : '',
        titlesecond : '',
        subtitle : '',
        link : '/',
        image : 'assets/contenido/carrousel/uno.png'
    },
    {
        id : 1,
        titlefirst : '',
        titlesecond : '',
        subtitle : '',
        link : '/',
        image : 'assets/contenido/carrousel/dos.png'
    },
    {
        id : 2,
        titlefirst : '',
        titlesecond : '',
        subtitle : '',
        link : '',
        image : 'assets/contenido/carrousel/tres.png'
    },
    {

        id : 3,
        titlefirst : '',
        titlesecond : '',
        subtitle : '',
        link : '',
        image : 'assets/contenido/carrousel/cuatro.png'
    },
    {
        id : 4,
        titlefirst : '',
        titlesecond : '',
        subtitle : '',
        link : '',
        image : 'assets/contenido/carrousel/cinco.png'
    }
          
]

  public finalHeight: string | number = 0;
  public currentPosition = 0;
  timerderecha: any;

  constructor(private router : Router){
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  };

  ngOnInit(): void {
     // this.iniciarTimer(1);
  }

  setCurrentPosition(position: number) {

    this.currentPosition = position;
    this.items[0].marginLeft = -100 * position;

  };

  iniciarTimer(direccion: number) {
    let derecha: any;
    if (direccion == 1) {
      derecha = setInterval(() => {
        this.setNext();
      }, 15000);
    };
  };

  setNext() {
    let nextPosition = this.currentPosition + 1;
    if (nextPosition > this.items.length - 1) {
      nextPosition = 0;
    }
    this.currentPosition = nextPosition;
    this.setCurrentPosition(nextPosition);
  };

  setBack() {
    console.log(this.currentPosition);
    let backPosition = this.currentPosition - 1;
    if (backPosition < 0) {
      backPosition = this.items.length - 1;
    }
    this.currentPosition = backPosition;
    this.setCurrentPosition(backPosition);
  };

  ira(url : string){
    this.router.navigateByUrl(url) ;
  };

}
