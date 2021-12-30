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
    question: 'Какое количество человек состоит в сообществе "Племя Пенсия"?',
    answers: {
      a: '9',
      b: '10',
      c: '11',
      d: '12'
    },
    rightAnswer: 'c',
    audio: QUESTION_AUDIO.easy,
    waitingTime: 3000,
  },
  {
    question: 'Как принято называть фотографию, на которой запечатлены веселые лица пенсионеров?',
    answers: {
      a: 'Счастливое селфи',
      b: 'Пенсионная карточка',
      c: 'Радостное фото',
      d: 'Веселая пикча'
    },
    rightAnswer: 'a',
    audio: QUESTION_AUDIO.easy,
    waitingTime: 3000,
  },
  {
    question: 'Какое место "Вингардиум Левиоса" дважды занимала на тематической мозгобойне 18+?',
    answers: {
      a: '1',
      b: '2',
      c: '3',
      d: 'последнее'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.easy,
    waitingTime: 5000,
  },
  {
    question: 'По сколько бат c мальчика ушло за фотесессию на Ко Лане?',
    answers: {
      a: '800',
      b: '850',
      c: '900',
      d: '950'
    },
    rightAnswer: 'c',
    audio: QUESTION_AUDIO.easy,
    waitingTime: 5000,
  },
  {
    question: 'Какова сумма лет всех "пенсионеров" на данный момент?',
    answers: {
      a: '314 лет',
      b: '321 год',
      c: '322 года',
      d: '325 лет'
    },
    rightAnswer: 'a',
    audio: QUESTION_AUDIO.middle,
    waitingTime: 8000,
  },
  {
    question: 'Какой термин не редко используется в пенсионных кругах и означает занимать место более высокое, иметь преимущество в отношении заданной позиции, господствовать?',
    answers: {
      a: 'Контролировать',
      b: 'Lorem ipsum dolor',
      c: 'Доминировать',
      d: 'Lorem ipsum dolor'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.middle,
    waitingTime: 8000,
  },
  {
    question: 'Как называется озеро на "Мысе Любви"?',
    answers: {
      a: 'Белое',
      b: 'Лебяжье',
      c: 'Круглое',
      d: 'Чертаны'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.middle,
    waitingTime: 8000,
  },
  {
    question: 'Как называется игра Alias в русской версии?',
    answers: {
      a: 'Объясни слово',
      b: 'Игра слов',
      c: 'Молви по-другому',
      d: 'Скажи иначе'
    },
    rightAnswer: 'd',
    audio: QUESTION_AUDIO.middle,
    waitingTime: 8000,
  },
  {
    question: 'Сколько подписчиков у аккаунта "Племя Пенсия" в инстаграм?',
    answers: {
      a: '0 - 50',
      b: '50 - 100',
      c: '100 - 150',
      d: '150 - 200'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.middle,
    waitingTime: 8000,
  },
  {
    question: 'В какие даты "Племя Пенсия" пребывало в Тайланде на новогодних праздниках 2018/19?',
    answers: {
      a: 'с 30 декабря по 7 января',
      b: 'с 30 декабря по 9 января',
      c: 'с 31 декабря по 7 января',
      d: 'с 31 декабря по 8 января'
    },
    rightAnswer: 'd',
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
