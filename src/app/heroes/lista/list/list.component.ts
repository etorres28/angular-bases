import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHeroe?: string;

  heroNames: string[] = ['Spiderman','Ironman','Thor','Hulk','She hulk','Hawkeye']

  removeLastHero():void {
    this.deletedHeroe = this.heroNames.pop();
  }
}
