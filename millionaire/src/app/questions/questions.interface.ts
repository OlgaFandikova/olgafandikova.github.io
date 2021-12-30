export interface Question {
  question: string;
  answers: {
    [key in AnswerLetter]: string;
  },
  rightAnswer: AnswerLetter;
  audio: HTMLAudioElement;
  waitingTime: number;
}

export type AnswerLetter = 'a' | 'b' | 'c' | 'd';

export interface Hints {
  50: boolean;
  internet: boolean;
  phone: boolean;
  heart: boolean;
}
