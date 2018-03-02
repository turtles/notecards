import '../../Styles/QuizView.css';
import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,
  Nav, NavItem, NavLink
} from 'reactstrap';

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

export default CardCounter;
