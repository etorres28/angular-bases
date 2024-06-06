import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter}}</h3>
    
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCount()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    
    <hr>
    <app-counter></app-counter>`
})

export class counterComponent {
    
    public counter = 10

    increaseBy(a: number):void{
        this.counter += a;
    }

    resetCount():void{
      this.counter = 10;
    }
}