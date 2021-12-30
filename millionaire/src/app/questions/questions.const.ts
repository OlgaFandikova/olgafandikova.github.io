import { environment } from 'src/environments/environment';

import { Question } from './questions.interface';

export const QUESTION_AUDIO = {
  easy: new Audio(environment.production
    ? 'https://www.dropbox.com/s/8wox39hx61aabdd/question-easy.mp3?raw=1'
    : '../../assets/audio/question-easy.mp3'
  ),
  middle: new Audio(environment.production
    ? 'https://www.dropbox.com/s/dh2l9ek5xtc3dzp/question-middle.mp3?raw=1'
    : '../../assets/audio/question-middle.mp3'
  ),
  difficult: new Audio(environment.production
    ? 'https://www.dropbox.com/s/6l8qr92gri9fpap/question-difficult.mp3?raw=1'
    : '../../assets/audio/question-difficult.mp3'
  ),
  veryDifficult: new Audio(environment.production
    ? 'https://www.dropbox.com/s/sxjqyao9wn9ldm0/question-very-difficult.mp3?raw=1'
    : '../../assets/audio/question-very-difficult.mp3'
  ),
};
export const QUESTIONS: Question[] = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: '1 Lorem ipsum dolor',
      b: '2 Lorem ipsum dolor',
      c: '3 Lorem ipsum dolor',
      d: '4 Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.easy,
    waitingTime: 3000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.easy,
    waitingTime: 3000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.easy,
    waitingTime: 5000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.easy,
    waitingTime: 5000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.middle,
    waitingTime: 8000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.middle,
    waitingTime: 8000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.middle,
    waitingTime: 8000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.middle,
    waitingTime: 8000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.middle,
    waitingTime: 8000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.difficult,
    waitingTime: 10000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.difficult,
    waitingTime: 10000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.difficult,
    waitingTime: 10000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.difficult,
    waitingTime: 10000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.difficult,
    waitingTime: 15000,
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga maxime non odit omnis quis quisquam quo rem sint tempore?',
    answers: {
      a: 'Lorem ipsum dolor',
      b: 'Lorem ipsum dolor',
      c: 'Lorem ipsum dolor',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.veryDifficult,
    waitingTime: 15000,
  },
];
