import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PDPComponent implements OnInit {
  photoUrl = 'https://via.placeholder.com/300x300';
  photoSize = 300;
  showText = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.addEventListener('wheel', (event: WheelEvent) => {
      if (event.deltaY > 0) {
        this.photoSize = 100;
        this.showText = true;
      } else {
        this.photoSize = 300;
        this.showText = false;
      }
    });
  }
}
