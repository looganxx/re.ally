import { Component } from '@angular/core';
import { IcService } from 'src/app/services/ic.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title:string = 'Garden';
  ic_response:string = '';

  constructor(private icService:IcService){
    this.getGreet('Roland');
  }
  public async getGreet(name:string){
    this.ic_response = await this.icService.greet(name);
  }
}
