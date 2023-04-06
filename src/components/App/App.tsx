import React, { useState } from 'react';

import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
// import { IAppState } from '../../interfaces';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const calcTotal = (): number => good + neutral + bad;
  const calcPositiveFeedback = (): string =>
    `${((good / calcTotal()) * 100).toFixed(0)}%`;

  const handleGoodResponse = (): void => setGood(good + 1);
  const handleNeutralResponse = (): void => setNeutral(neutral + 1);
  const handleBadResponse = (): void => setBad(bad + 1);

  return (
    <Container>
      <ModernNormalize />

      <h2> This is my Feedback Widget</h2>

      <Section title="Please leave feedback">
        <FeedbackOptions
          handlerGood={handleGoodResponse}
          handlerNeutral={handleNeutralResponse}
          handlerBad={handleBadResponse}
        />
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
