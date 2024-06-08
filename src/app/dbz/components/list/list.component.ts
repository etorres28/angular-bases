import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input()
  public characterList: Character[] = [{
    name: '',
    power: 0
  }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter(); 
  // index value: number

  onDeleteCharacter(id?: string):void {
    if (!id) return;

    this.onDeleteId.emit(id)
  }

}
