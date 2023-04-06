import React from 'react';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { IAppState } from '../../interfaces';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Container } from './App.styled';

export class App extends React.Component<{}, IAppState> {
  state: IAppState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  calcTotal = (): number =>
    this.state.good + this.state.neutral + this.state.bad;
  calcPositiveFeedback = (): string =>
    `${((this.state.good / this.calcTotal()) * 100).toFixed(0)}%`;

  handleGoodResponse = (): void =>
    this.setState(prevState => ({ good: prevState.good + 1 }));
  handleNeutralResponse = (): void =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  handleBadResponse = (): void =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  render() {
    return (
      <Container>
        <ModernNormalize />

        <h2> This is my Feedback Widget</h2>

        <Section title="Please leave feedback">
          <FeedbackOptions
            handlerGood={this.handleGoodResponse}
            handlerNeutral={this.handleNeutralResponse}
            handlerBad={this.handleBadResponse}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.calcTotal()}
            positiveFeedback={this.calcPositiveFeedback()}
          />
        </Section>
      </Container>
    );
  }
}
