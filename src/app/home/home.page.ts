import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 num: number | undefined;
 numSecret: number = this.numAleatorio(1,100);
 mayorMenor: string = "...";

 constructor() {}

 numAleatorio(a: number, b: number){
  return Math.round(Math.random()*(b-a)+a);
 }

 compruebaNumero() {
  if(this.num) {
    if(this.numSecret < this.num) {
      this.mayorMenor = 'menor';
    } else if(this.numSecret > this.num) {
      this.mayorMenor = 'mayor';
    } else {
      this.mayorMenor = 'igual';
    }
  }
 }

}
