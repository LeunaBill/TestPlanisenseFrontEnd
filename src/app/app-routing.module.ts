import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbresParArrondissementComponent } from './Components/arbres-par-arrondissement/arbres-par-arrondissement.component';
import { ArbresParGenreComponent } from './Components/arbres-par-genre/arbres-par-genre.component';

const routes: Routes = [
  { path: '', component: ArbresParArrondissementComponent },
  { path: 'genre', component: ArbresParGenreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
