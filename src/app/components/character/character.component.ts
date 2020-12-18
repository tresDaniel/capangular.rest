import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  name:any;
  portraitUrl:string = '';
  character!: Character;

  constructor(private route: ActivatedRoute, private service:CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
    });

    this.findByName(this.name);
  }

  findByName(name: string){
    this.service.findByName(name).subscribe((response:any)=> {
      this.character = response;
    }, (error:HttpErrorResponse) => {
      if (error.status == 404){
        this.router.navigate(['/404']);
      }
    });

    this.findPortrait(name);
  }

  findPortrait(name:string) {
    this.portraitUrl = this.service.findPortrait(name);
  }

}
