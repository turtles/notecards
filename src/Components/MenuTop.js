import React from 'react';
import PropTypes from 'prop-types'
import {
  Row, Col, Button
} from 'reactstrap';

const MenuTop = ({view, onGotoQuiz, onGotoNotecardEditor}) => {
  console.log("the view is " + view);
  if (view === 'quiz') {
    return (
    <div>
      <h2>Quiz</h2>
      <Row>
        <Col sm={{size: 2, offset: 5}}>
          <Button onClick={onGotoNotecardEditor}>Edit Notecards</Button>
        </Col>
      </Row>
      <br/>
    </div>);
  }
  else {
    return (<div>
      <h2>Edit Notecards</h2>
      <Row>
        <Col sm={{size: 2, offset: 5}}>
          <Button onClick={onGotoQuiz}>Start Quiz</Button>
        </Col>
      </Row>
      <br/>
    </div>);
  }
};

export default MenuTop;
