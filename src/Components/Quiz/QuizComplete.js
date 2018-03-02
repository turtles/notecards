import '../../Styles/QuizView.css';
import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,
  Nav, NavItem, NavLink
} from 'reactstrap';

const QuizComplete = ({})=>{
  return (
    <Row>
      <Col sm={{size: 6, offset: 3}} className="align-center">
        <h3>Quiz complete</h3>
      </Col>
    </Row>
  );
}

export default QuizComplete;
