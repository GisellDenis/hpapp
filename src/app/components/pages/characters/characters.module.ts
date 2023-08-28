import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharactersListComponent } from '@characters/characters-list/characters-list.component';
import { CharactersDetailsComponent } from '@characters/characters-details/characters-details.component';

const myComponent = [
     CharactersDetailsComponent,
    CharactersListComponent
];

@NgModule({
  declarations: [
 ...myComponent
  ],

  imports: [
    CommonModule, RouterModule
  ],
  exports:[...myComponent]
})
export class CharactersModule { }
