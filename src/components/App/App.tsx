import { useReducer } from 'react';

import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { IAppState } from '../../interfaces';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Container } from './App.styled';

import { IFeedbackAction } from '../../interfaces';

export const App = () => {
  const [{ good, neutral, bad }, feedbackDispatch] = useReducer(
    feedbackReducer,
    {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  function feedbackReducer(
    prevState: IAppState,
    feedbackAction: IFeedbackAction
  ) {
    if (typeof prevState[feedbackAction.type] !== 'undefined') {
      return {
        ...prevState,
        [feedbackAction.type]:
          prevState[feedbackAction.type] + feedbackAction.payload,
      };
    }
    throw new Error(`Unsupported action type ${feedbackAction.type}`);
  }

  const calcTotal = (): number => good + neutral + bad;
  const calcPositiveFeedback = (): string =>
    `${((good / calcTotal()) * 100).toFixed(0)}%`;

  return (
    <Container>
      <ModernNormalize />

      <h2> This is my Feedback Widget</h2>

      <Section title="Please leave feedback">
        <FeedbackOptions feedbackDispatch={feedbackDispatch} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={calcTotal()}
          positiveFeedback={calcPositiveFeedback()}
        />
      </Section>
    </Container>
  );
};
