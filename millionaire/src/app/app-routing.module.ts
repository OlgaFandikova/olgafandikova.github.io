import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { FinalComponent } from './final/final.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'rules',
  component: AboutComponent
}, {
  path: 'final',
  component: FinalComponent
}, {
  path: 'questions',
  loadChildren: () => import('./questions/questions.module').then((m) => m.QuestionsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
