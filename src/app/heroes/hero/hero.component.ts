import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name: string = 'Ironman';
  age:  number = 45;

  get getCapitalizeName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'SpiderMan'
  }

  changeAge():void {
    this.age = 25
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
