export interface LogModel {
  title: string;
  message: string;
}

export interface StepModel {
  title: string;
  callback: Function;
  clean?: boolean;
}
