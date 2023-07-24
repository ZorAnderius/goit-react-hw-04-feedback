import { FeedbackBtn } from 'components/FeedbackBtn/FeedbackBtn';
import feedbackOptCSS from './FeedbackOptions.module.css';
import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={feedbackOptCSS.btn_conteiner}>
      {options.map(({ id, data }) => (
        <FeedbackBtn
          key={id}
          text={data}
          onClick={() => onLeaveFeedback(data)}
        />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
