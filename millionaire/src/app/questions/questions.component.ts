import { Component, OnInit } from '@angular/core';

import { Observable, of, timer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AnswerLetter, Hints, Question } from './questions.interface';
import { QUESTIONS } from './questions.const';
import { Router } from '@angular/router';

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
  public isFinal = false;
  public hiddenAnswers = null;
  public isShowLoserModal = false;
  public answerAcceptedAudio;
  public answerRightAudio;
  public answerWrongAudio;
  public answerStartAudio;
  public fiftyAudio;
  public internetAudio;
  public phoneAudio;
  public finalAudio;
  public timer$: Observable<number> = of(null);

  public get currentQuestion(): Question {
    return this.questions[this.questionNumber - 1] || null;
  }

  constructor(private router: Router) {
    this.answerAcceptedAudio = new Audio(environment.production
      ? 'https://www.dropbox.com/s/39purhmhco9rujv/answer-accepted.mp3?raw=1'
      : '../../assets/audio/answer-accepted.mp3'
    );
    this.answerRightAudio = new Audio(environment.production
      ? 'https://www.dropbox.com/s/kcll1c4jr5st005/answer-right.mp3?raw=1'
      : '../../assets/audio/answer-right.mp3'
    );
    this.answerWrongAudio = new Audio(environment.production
      ? 'https://www.dropbox.com/s/9mwmy79h3s2ms6u/answer-wrong.mp3?raw=1'
      : '../../assets/audio/answer-wrong.mp3'
    );
    this.answerStartAudio = new Audio(environment.production
      ? 'https://www.dropbox.com/s/ba1b8a37i22w4z3/answer-start.mp3?raw=1'
      : '../../assets/audio/answer-start.mp3'
    );
    this.fiftyAudio = new Audio(environment.production
      ? 'https://www.dropbox.com/s/fv5zb5j7nmewvv8/50-50.mp3?raw=1'
      : '../../assets/audio/50-50.mp3'
    );
    this.internetAudio = new Audio(environment.production
      ? 'https://www.dropbox.com/s/zxz04wbvqwvo6tv/internet.mp3?raw=1'
      : '../../assets/audio/internet.mp3'
    );
    this.phoneAudio = new Audio(environment.production
        ? 'https://www.dropbox.com/s/m0ancfm0g8q24wd/phone.mp3?raw=1'
        : '../../assets/audio/phone.mp3'
    );
    this.finalAudio = new Audio(environment.production
      ? 'https://www.dropbox.com/s/9vwp0xdto7afq6c/start.mp3?raw=1'
      : '../../assets/audio/start.mp3'
    );
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

  public continueAfterFail(): void {
    this.isShowLoserModal = false;
    this.questionNumber === 15
      ? this.setQuestion(15)
      : this.nextQuestion();
  }

  public setQuestion(questionNumber: number): void {
    if (questionNumber > 15) {
      this.isFinal = true;
      this.playAudio(this.finalAudio);
      return;
    }

    this.selectedAnswer = null;
    this.hiddenAnswers = null;
    this.isShowRightAnswer = false;
    this.questionNumber = questionNumber;

    this.playAudio(this.answerStartAudio);

    setTimeout(() => this.playQuestionAudio(), 4000);
  }

  public nextQuestion(): void {
    this.setQuestion(this.questionNumber + 1);
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

    audio.crossOrigin = 'Anonymous';
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
