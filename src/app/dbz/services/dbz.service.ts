import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    
    public varEmit!: number;

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krilin',
        power: 50
    },{
        id: uuid(),
        name: 'Goku',
        power: 1500
    },{
        id: uuid(),
        name: 'Vegeta',
        power: 1300
    }];

    addCharacter(character: Character): void {

        const newCharacter: Character = {
            id: uuid(),...character}

        this.characters.push(newCharacter)
    };

    deleteCharacterbyId(id: string) {
        this.characters = this.characters.filter(character => character.id !== id)
    };
    
}