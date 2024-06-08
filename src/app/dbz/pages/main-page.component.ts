import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    constructor(private dbz: DbzService){
        
    }

    get characters(): Character[]{
        return [...this.dbz.characters];
    }

    onDeleteCharacter(id: string):void {
        this.dbz.deleteCharacterbyId(id)
    }

    onNewCharacter(character: Character){
        this.dbz.addCharacter(character)
    }
}