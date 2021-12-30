import { Component, OnInit } from '@angular/core';

import { Observable, of, timer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

import { AnswerLetter, Hints, Question } from './questions.interface';
import { QUESTIONS } from './questions.const';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public questions: Question[] = QUESTIONS;
  public questionNumber = 0;
  public selectedAnswer: AnswerLetter | null = null;
  public isShowRightAnswer = false;
  public hints: Hints = {
    50: true,
    internet: true,
    phone: true,
    heart: true
  };
  public hiddenAnswers = null;
  public isShowLoserModal = false;
  public answerAcceptedAudio = new Audio('../../assets/audio/answer-accepted.mp3');
  public answerRightAudio = new Audio('../../assets/audio/answer-right.mp3');
  public answerWrongAudio = new Audio('../../assets/audio/answer-wrong.mp3');
  public answerStartAudio = new Audio('../../assets/audio/answer-start.mp3');
  public fiftyAudio = new Audio('../../assets/audio/50-50.mp3');
  public internetAudio = new Audio('../../assets/audio/internet.mp3');
  public phoneAudio = new Audio('../../assets/audio/phone.mp3');
  public timer$: Observable<number> = of(null);

  public get currentQuestion(): Question {
    return this.questions[this.questionNumber - 1] || null;
  }

  ngOnInit(): void {
    this.nextQuestion();
  }

  public selectAnswer(answerLetter: AnswerLetter): void {
    if (this.selectedAnswer) {
      return;
    }

    this.selectedAnswer = answerLetter;

    this.playAudio(this.answerAcceptedAudio);

    setTimeout(() => this.showRightAnswer(), this.currentQuestion.waitingTime);
  }

  public showRightAnswer(): void {
    this.isShowRightAnswer = true;
    this.selectedAnswer === this.currentQuestion.rightAnswer
      ? this.success()
      : this.failure();
  }

  public success(): void {
    this.playAudio(this.answerRightAudio);

    setTimeout(() => this.nextQuestion(), 4000);
  }

  public failure(): void {
    this.playAudio(this.answerWrongAudio);

    if (this.hints.heart) {
      this.hints.heart = false;

      setTimeout(() => this.nextQuestion(), 5000);
    } else {
      setTimeout(() => (this.isShowLoserModal = true), 5000);
    }
  }

  public hideLoserModal(): void {
    this.isShowLoserModal = false;
  }

  public nextQuestion(): void {
    this.selectedAnswer = null;
    this.hiddenAnswers = null;
    this.isShowRightAnswer = false;
    this.questionNumber += 1;

    this.playAudio(this.answerStartAudio);

    setTimeout(() => this.playQuestionAudio(), 4000);
  }

  public playQuestionAudio(): void {
    this.playAudio(this.currentQuestion.audio);
  }

  public playAudio(audio: HTMLAudioElement): void {
    [
      this.answerAcceptedAudio,
      this.answerRightAudio,
      this.answerWrongAudio,
      this.answerStartAudio,
      this.currentQuestion.audio
    ].forEach((item) => {
      item.pause();
      item.currentTime = 0;
    });

    audio.play();
  }

  public disableHint(hintName: string): void {
    this.hints[hintName] = false;

    switch (hintName) {
      case '50': {
        this.fiftyAudio.play();
        this.hideTwoAnswers();

        break;
      }
      case 'internet': {
        this.playAudio(this.internetAudio);
        this.startTimer(60);

        setTimeout(() => this.playQuestionAudio(), 6100);

        break;
      }
      case 'phone': {
        this.playAudio(this.phoneAudio);
        this.startTimer(30);

        setTimeout(() => this.playQuestionAudio(), 3100);

        break;
      }
    }
  }

  public hideTwoAnswers(): void {
    const answerLetters = new Set(['a', 'b', 'c', 'd']);

    answerLetters.delete(this.currentQuestion.rightAnswer);

    const random = Math.floor(Math.random() * answerLetters.size);
    const randomLetter = Array.from(answerLetters)[random];

    answerLetters.delete(randomLetter);

    this.hiddenAnswers = [...Array.from(answerLetters)];
  }

  public startTimer(time: number): void {
    this.timer$ = timer(0, 1000).pipe(
      takeWhile((counter: number) => counter <= time),
      map((counter: number) => time - counter)
    );
  }
}
