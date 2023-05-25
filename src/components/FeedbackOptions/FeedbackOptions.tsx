import React from 'react';
import { IFeedbackOptionsProps } from '../../interfaces';
import { Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  feedbackDispatch,
}: IFeedbackOptionsProps) => {
  return (
    <Container>
      <button
        type="button"
        className="button-good"
        onClick={() => {
          feedbackDispatch({ type: 'good', payload: 1 });
        }}
      >
        Good
      </button>
      <button
        type="button"
        className="button-neutral"
        onClick={() => {
          feedbackDispatch({ type: 'neutral', payload: 1 });
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        className="button-bad"
        onClick={() => {
          feedbackDispatch({ type: 'bad', payload: 1 });
        }}
      >
        Bad
      </button>
    </Container>
  );
};
