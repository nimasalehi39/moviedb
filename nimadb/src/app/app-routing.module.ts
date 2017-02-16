import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieService } from './movie.service';

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MovieService]
})
export class AppRoutingModule { }
