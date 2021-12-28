import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'questions',
  loadChildren: () => import('./questions/questions.module').then((m) => m.QuestionsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
