import btnCSS from './FeedbackBtn.module.css';
import propTypes from 'prop-types';

export const FeedbackBtn = ({ text, onClick }) => {
  return (
    <button type="button" className={btnCSS.btn} onClick={onClick}>
      {text}
    </button>
  );
};

FeedbackBtn.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
