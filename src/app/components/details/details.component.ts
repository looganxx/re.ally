import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Section } from './section.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  containerfoto = '';
  info = 'nascosto';


  constructor(private elementRef: ElementRef) { }

  sections: Section[] = [
    { image1: 'assets/cas.jpeg', image2: 'assets/cas.jpeg', currentImage: 'assets/cas.jpeg' },
    { image1: 'assets/cuc.jpeg', image2: 'assets/Giardino2.jpeg', currentImage: 'assets/cuc.jpeg' },
    { image1: 'assets/bag.jpeg', image2: 'assets/interno2.jpeg', currentImage: 'assets/bag.jpeg' },
    { image1: 'assets/letto.jpeg', image2: 'assets/interno4.jpeg', currentImage: 'assets/letto.jpeg' },
    { image1: 'assets/letto1.jpeg', image2: 'assets/interno2.jpeg', currentImage: 'assets/letto1.jpeg' },
    { image1: 'assets/sog.jpeg', image2: 'assets/interno4.jpeg', currentImage: 'assets/sog.jpeg' }
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
      if (window.pageYOffset < 0) {
        this.containerfoto = 'slide-out1';
        this.info = 'slide-in1'
      }
      
    }
}