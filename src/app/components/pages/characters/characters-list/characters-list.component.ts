import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '@app/shared/services/character.service';
import { } from 'rxjs/operators';
import * as $ from 'jquery'
type RequestInfo={
  next: string;
} ;
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})

export class CharactersListComponent implements OnInit{
  characters: Characters[] = [];

  info: any RequestInfo={
    next: null,
  };

  private pageNum = 1;
  private query: string | undefined;
  private hideScrollHeight= 200;
  private showScroollHeight=550;
  characterSvc: any;
  character: any;

  constructor(private characteSvc: CharacterService,
              private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.getCharactersByQuery()

  }
  private getCharactersByQuery(): void{
    this.route.queryParams.pipe(
      take(1)).subscribe((params: ParamMap) =>{
        console.log('Params->', params)
        this.query = params['q'];
        this.getDataFromService();

      })


  }

  private getDataFromService():void{
    this.characterSvc
    .searchCharacters(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe ((res: any) => {
      if(res?.results?.lenght){
         const {info, results} =res; this.characters = [...this.character, ...results];
        this.info =info;
      }else{
        this.characters = [];
      }



console.log('Respose->', res)

     })
  }
}
function take(arg0: number): any {
  throw new Error('Function not implemented.');
}

