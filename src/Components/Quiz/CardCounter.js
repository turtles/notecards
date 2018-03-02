import '../../Styles/NotecardViewer.css';
import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,
  Nav, NavItem, NavLink
} from 'reactstrap';

const CardCounter = ({currentCard, totalCards})=>(
  <span>{currentCard}/{totalCards}</span>
)

export default CardCounter;
