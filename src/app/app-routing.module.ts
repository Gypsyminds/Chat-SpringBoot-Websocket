import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { PassageTestComponent } from './passage-test/passage-test.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [ 
{ path: 'home',  component: TestComponent },
{path: '', redirectTo: '/pp', pathMatch: 'full'},
{path:'pp', component:PassageTestComponent},
{path:'score', component:ScoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
