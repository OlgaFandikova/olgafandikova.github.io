import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsComponent } from './questions.component';

const routes: Routes = [{
  path: '',
  component: QuestionsComponent
}];

export const questionsRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
