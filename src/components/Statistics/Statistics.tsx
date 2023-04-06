import { IStatisticsProps } from '../../interfaces';
import { Container } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}: IStatisticsProps) => {
  if (!total) {
    return <p>No feedback given</p>;
  }
  return (
    <Container>
      <p className="response-good">Good: {good}</p>
      <p className="response-neutral">Neutral: {neutral}</p>
      <p className="response-bad">Bad: {bad}</p>
      <p className="response-total">Total: {total}</p>
      <p className="positive-persentage">
        Positive feedback: {positiveFeedback}
      </p>
    </Container>
  );
};
