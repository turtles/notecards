import '../../Styles/QuizView.css';
import React from 'react';
import PropTypes from 'prop-types'

const CardCounter = ({currentCard, totalCards})=>{
  if (currentCard > totalCards) {
    return <span>{totalCards}/{totalCards}</span>;
  }
  else {
    return (
      <span>{currentCard}/{totalCards}</span>
    );
  }
}

CardCounter.propTypes = {
  currentCard: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
}

export default CardCounter;
