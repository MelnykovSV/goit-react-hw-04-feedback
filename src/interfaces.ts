import React from 'react';

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
  feedbackDispatch: React.Dispatch<IFeedbackAction>;
}

export interface IStatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positiveFeedback: string;
}

export interface IFeedbackAction {
  type: 'good' | 'neutral' | 'bad';
  payload: number;
}
