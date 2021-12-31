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
    question: 'Каким словом "пенсионеры" называют ситуацию, когда кто-то занимает главенствующее положение?',
    answers: {
      a: 'Контролировать',
      b: 'Господствовать',
      c: 'Доминировать',
      d: 'Педалировать'
    },
    rightAnswer: 'c',
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
    question: 'Этот напиток был изобретен как лекарственный препарат фармацевтом Джоном Пембертоном в Атланте в 1886 году. Его по сей день можно встретить на "пенсионных" тусовках. Что за напиток?',
    answers: {
      a: 'Кока-кола',
      b: 'Баллантайнс',
      c: 'Мартини',
      d: 'Швепс'
    },
    rightAnswer: 'a',
    audio: QUESTION_AUDIO.difficult,
    waitingTime: 10000,
  },
  {
    question: 'Какое сложное слово образовано путем слияния японских слов "пустота" и "оркестр"?',
    answers: {
      a: 'Дискотека',
      b: 'Караоке',
      c: 'Микрофон',
      d: 'Концерт'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.difficult,
    waitingTime: 10000,
  },
  {
    question: 'Какого вида пенсионного обеспечения не существует в России?',
    answers: {
      a: 'Пенсия за выслугу лет',
      b: 'Пенсия по старости',
      c: 'Страховая пенсия',
      d: 'Социальная пенсия'
    },
    rightAnswer: 'c',
    audio: QUESTION_AUDIO.difficult,
    waitingTime: 10000,
  },
  {
    question: 'Как согласно этикеточке называется "пенсионный" напиток, произведенный по рецепту: немножечко Вильям Лоусенс + Кока-кола 4 балла?',
    answers: {
      a: 'Рэзвэдэнка',
      b: 'Развэдэнка',
      c: 'Разведэнка',
      d: 'Рэзведэнка'
    },
    rightAnswer: 'b',
    audio: QUESTION_AUDIO.difficult,
    waitingTime: 15000,
  },
  {
    question: 'Кто является основателем и фронтменом украинской рок-группы "Валентин Стрыкало"?',
    answers: {
      a: 'Иван Алексеев',
      b: 'Джаред Летов',
      c: 'Сергей Приказчиков',
      d: 'Юрий Каплан'
    },
    rightAnswer: 'd',
    audio: QUESTION_AUDIO.veryDifficult,
    waitingTime: 15000,
  },
];
