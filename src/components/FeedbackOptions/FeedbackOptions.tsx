import React from 'react';
import { IFeedbackOptionsProps } from '../../interfaces';
import { Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ handleFeedback }: IFeedbackOptionsProps) => {
  return (
    <Container>
      <button
        type="button"
        className="button-good"
        onClick={() => {
          handleFeedback('good');
        }}
      >
        Good
      </button>
      <button
        type="button"
        className="button-neutral"
        onClick={() => {
          handleFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        className="button-bad"
        onClick={() => {
          handleFeedback('bad');
        }}
      >
        Bad
      </button>
    </Container>
  );
};
