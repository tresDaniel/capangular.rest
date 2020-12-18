import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtifactListComponent } from './components/artifact-list/artifact-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { HomeComponent } from './components/home/home.component';
import { NationListComponent } from './components/nation-list/nation-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artifacts', component: ArtifactListComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:name', component: CharacterComponent },
  { path: 'nations', component: NationListComponent },
  { path: 'weapons', component: WeaponListComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: '404',  component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
