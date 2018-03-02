import React from 'react';
import PropTypes from 'prop-types'
import {
  Row, Col, Button
} from 'reactstrap';

const MenuTop = ({view, onGotoQuiz, onGotoNotecardEditor}) => {
  let title, menu;
  if (view === 'quiz') {
    title = 'Quiz';
    menu = (
      <Col sm={{size: 2, offset: 5}}>
        <Button onClick={onGotoNotecardEditor}>Edit Notecards</Button>
      </Col>
    );
  }
  else {
    title = 'Edit Notecards';
    menu = (
      <Col sm={{size: 2, offset: 5}}>
        <Button onClick={onGotoQuiz}>Start Quiz</Button>
      </Col>
    );
  }

  return (
    <div>
      <h2>{title}</h2>
      <Row>
          {menu}
      </Row>
      <br/>
    </div>
  );
};

MenuTop.propTypes = {
  view: PropTypes.string.isRequired,
  onGotoQuiz: PropTypes.func.isRequired,
  onGotoNotecardEditor: PropTypes.func.isRequired
}

export default MenuTop;
