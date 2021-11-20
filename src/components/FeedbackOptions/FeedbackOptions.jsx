import propTypes from 'prop-types';
import Style from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map(key => (
        <button
          key={key}
          type="button"
          className={Style.button}
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {`${key}`}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.object.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;