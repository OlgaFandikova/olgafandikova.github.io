import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';

import { questionsRouting } from './questions.routing';

@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,

    questionsRouting
  ]
})
export class QuestionsModule { }
