import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {  }

  onLogoutClick(){  }

  onMenuClick() {
    // menuItems.style.display = (menuItems.style.display === "block") ? "none" : "block";
  }

  toggleClick() {
    this.isClicked = !this.isClicked;
  }
}