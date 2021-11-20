import PropTypes from 'prop-types';
import Style from './Statistics.module.css';

export default function Statistics({
  options,
  total = 0,
  positivePercentage = 0,
}) {
  return (
    <div>
      {renderStatistics(options)}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

const renderStatistics = function (options) {
  return Object.keys(options).map(key => (
    <p key={key} className={Style.description}>
      {key}: {options[key]}
    </p>
  ));
};