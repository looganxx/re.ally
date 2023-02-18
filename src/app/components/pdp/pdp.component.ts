import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Section } from './section.interface';

@Component({
selector: 'app-pdp',
templateUrl: './pdp.component.html',
styleUrls: ['./pdp.component.css'],
})

export class PDPComponent implements OnInit {

  containerClass = '';
  containerClass1 = 'nascosto';


  constructor(private elementRef: ElementRef) { }

  sections: Section[] = [
    { image1: 'assets/fronte.jpeg', image2: 'assets/lato.jpeg', currentImage: 'assets/fronte.jpeg' },
    { image1: 'assets/Giardino1.jpeg', image2: 'assets/Giardino2.jpeg', currentImage: 'assets/Giardino1.jpeg' },
    { image1: 'assets/interno1.jpeg', image2: 'assets/interno2.jpeg', currentImage: 'assets/interno1.jpeg' },
    { image1: 'assets/interno3.jpeg', image2: 'assets/interno4.jpeg', currentImage: 'assets/interno3.jpeg' },
    { image1: 'assets/interno5.jpeg', image2: 'assets/interno6.jpeg', currentImage: 'assets/interno5.jpeg' }
  ];

  ngOnInit(): void {
  }

  getCurrentImage(section : Section) {
    return section.currentImage;
  }

  goToNextImage(section: Section): void {
    if (section.currentImage === section.image1) {
      section.currentImage = section.image2;
    } else {
      section.currentImage = section.image1;
    }
  }

  goToPrevImage(section: Section): void {
    if (section.currentImage === section.image2) {
      section.currentImage = section.image1;
    } else {
      section.currentImage = section.image2;
    }
  }

  @HostListener('window:scroll')
    onWindowScroll() {
      if (window.pageYOffset > 0) {
        this.containerClass = 'slide-out';
        this.containerClass1 = 'slide-in1'
      }
      else if(window.pageYOffset < 0) {
        this.containerClass = 'slide-in';
        this.containerClass1 = 'slide-out1'
      }
    }
}