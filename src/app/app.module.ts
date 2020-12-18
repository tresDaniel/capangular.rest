import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtifactListComponent } from './components/artifact-list/artifact-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { NationListComponent } from './components/nation-list/nation-list.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { FormsModule } from '@angular/forms';
import { CharacterService } from './services/character.service';
import { ArtifactService } from './services/artifact.service';
import { NationService } from './services/nation.service';
import { WeaponService } from './services/weapon.service';
import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterComponent } from './components/character/character.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmptyFieldPipe } from './shared/pipes/empty-field.pipe';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtifactListComponent,
    CharacterListComponent,
    NationListComponent,
    WeaponListComponent,
    CharacterComponent,
    PageNotFoundComponent,
    EmptyFieldPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [CharacterService, ArtifactService, NationService, WeaponService],
  bootstrap: [AppComponent]
})
export class AppModule { }
