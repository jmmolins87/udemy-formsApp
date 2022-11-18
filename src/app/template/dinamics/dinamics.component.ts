import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person, Favorites } from '../interfaces/template.interface';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  public title: string = 'Dinámicos';
  public initForm = {
    name: ''
  }
  public person: Person = {
    name: 'Juanma',
    favorites: [
      { id: 1, name: 'Gran Turismo' },
      { id: 2, name: 'Uncharted' },
      { id: 3, name: 'Fifa' }
    ]
  }
  public newGame: string = '';

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls.name?.invalid
      && this.myForm?.controls.name?.touched;
  }

  save() {
    console.log( this.myForm );  
    console.log( 'Formulario posteado' );
  }

  delete( index: number) {
    this.person.favorites.splice( index, 1 );
  }

  addNewGame() {
    const newFavorite: Favorites = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }
    this.person.favorites.push( newFavorite );
    this.newGame = '';
  }

}
