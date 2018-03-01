import React from 'react';
import PropTypes from 'prop-types'
import {
  Row, Col, Button
} from 'reactstrap';

const MenuTop = ({view, onGotoQuiz, onGotoNotecardEditor}) => {
  let title, menu;
  if (view === 'quiz') {
    title = 'Quiz';
    menu = <Button onClick={onGotoNotecardEditor}>Edit Notecards</Button>;
  }
  else {
    title = 'Edit Notecards';
    menu = <Button onClick={onGotoQuiz}>Start Quiz</Button>;
  }

  return (
    <div>
      <h2>{title}</h2>
      <Row>
        <Col sm={{size: 2, offset: 5}}>
          {menu}
        </Col>
      </Row>
      <br/>
    </div>);
};

export default MenuTop;
