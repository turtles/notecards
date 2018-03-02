import '../../Styles/QuizView.css';
import PropTypes from 'prop-types'
import React from 'react';
import {
  Row, Col, Button
} from 'reactstrap';

const QuizComplete = ({onRestartQuiz})=>{
  return (
    <Row>
      <Col sm={{size: 6, offset: 3}} className="text-center">
        <br/>
        <h3>Quiz complete</h3>
        <br/>
        <Button onClick={onRestartQuiz}>Restart</Button>
      </Col>
    </Row>
  );
}

QuizComplete.propTypes = {
  onRestartQuiz: PropTypes.func.isRequired,
}

export default QuizComplete;
