import React from 'react';
import PropTypes from 'prop-types'
import {
  Row, Col, Button
} from 'reactstrap';
import Checkbox from 'rc-checkbox';

const MenuTop = ({view, definitionFirst, onGotoQuiz, onGotoNotecardEditor, onDefinitionFirstChanged}) => {
  let title, menu;
  if (view === 'quiz') {
    title = 'Quiz';
    menu = (
      <Col sm={{size: 2, offset: 5}}>
        <Button onClick={onGotoNotecardEditor}>Edit Notecards</Button>
        <span><Checkbox defaultChecked={definitionFirst} onChange={(e, oldValue) => onDefinitionFirstChanged()}/>Definitions First</span>
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

export default MenuTop;
