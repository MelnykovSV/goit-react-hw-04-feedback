import { IFeedbackOptionsProps } from '../../interfaces';
import { Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  handlerGood,
  handlerNeutral,
  handlerBad,
}: IFeedbackOptionsProps) => {
  return (
    <Container>
      <button type="button" className="button-good" onClick={handlerGood}>
        Good
      </button>
      <button type="button" className="button-neutral" onClick={handlerNeutral}>
        Neutral
      </button>
      <button type="button" className="button-bad" onClick={handlerBad}>
        Bad
      </button>
    </Container>
  );
};
