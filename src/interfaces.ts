export interface IAppState {
  good: number;
  neutral: number;
  bad: number;
}

export interface ISectionProps {
  title: string;
  children: React.ReactNode;
}

export interface IFeedbackOptionsProps {
  handlerGood: React.MouseEventHandler;
  handlerNeutral: React.MouseEventHandler;
  handlerBad: React.MouseEventHandler;
}

export interface IStatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positiveFeedback: string;
}
