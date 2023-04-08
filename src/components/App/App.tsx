import { useReducer } from 'react';

import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { IAppState } from '../../interfaces';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Container } from './App.styled';

export const App = () => {
  const [{ good, neutral, bad }, dispatchFeedback] = useReducer(
    feedbackReducer,
    {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  function feedbackReducer(
    prevState: IAppState,
    feedbackType: 'good' | 'neutral' | 'bad'
  ) {
    /// Нужна ли эта проверка? TS все равно же выдает ошибку, если сюда будет передаваться невалидное значение
    return ['good', 'neutral', 'bad'].includes(feedbackType)
      ? { ...prevState, [feedbackType]: prevState[feedbackType] + 1 }
      : prevState;
  }

  const calcTotal = (): number => good + neutral + bad;
  const calcPositiveFeedback = (): string =>
    `${((good / calcTotal()) * 100).toFixed(0)}%`;

  return (
    <Container>
      <ModernNormalize />

      <h2> This is my Feedback Widget</h2>

      <Section title="Please leave feedback">
        <FeedbackOptions handleFeedback={dispatchFeedback} />
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
