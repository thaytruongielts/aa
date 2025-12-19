
export interface Question {
  id: number;
  label: string;
  expectedAnswers: string[];
}

export interface UserAnswers {
  [key: number]: string;
}

export interface Results {
  [key: number]: boolean;
}

export enum AppState {
  START = 'START',
  EXERCISE = 'EXERCISE',
  REVIEW = 'REVIEW'
}
