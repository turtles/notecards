import '../../Styles/QuizView.css';
import React from 'react';
import PropTypes from 'prop-types'
import {
  Row, Col,
  Nav, NavItem, NavLink
} from 'reactstrap';
import CardCounter from './CardCounter'
import QuizComplete from './QuizComplete'
import NotecardViewer from './NotecardViewer'

const QuizView = ({
    // State
    flipped, word, definition, definitionFirst, cardIndex, totalCards,
    // Dispatch
    onFlip, onSkip, onCorrect, onIncorrect, onDefinitionFirstChanged}) => {

  let navItemDefinitionFirst = (definitionFirst ?
    (<NavItem><NavLink href="#" onClick={onDefinitionFirstChanged}>Definition</NavLink></NavItem>) :
    (<NavItem><NavLink href="#" onClick={onDefinitionFirstChanged}>Word</NavLink></NavItem>)
  );

  let quizComplete = cardIndex+1 > totalCards; // cardIndex is zero based

  let quizObjects;
  if (quizComplete) {
    quizObjects = (
      <QuizComplete/>
    );
  }
  else {
    quizObjects = (
      <NotecardViewer
        flipped={flipped} word={word} definition={definition} definitionFirst={definitionFirst}
        onFlip={onFlip} onSkip={onSkip} onCorrect={onCorrect} onIncorrect={onIncorrect}
      />
    );
  }
  return (
    <div>
      <Row>
        <Col>
        <Nav>
          {navItemDefinitionFirst}
        </Nav>
        </Col>
        <Col className="text-right">
          <CardCounter currentCard={cardIndex+1} totalCards={totalCards} />
        </Col>
      </Row>
      {quizObjects}
    </div>
  );
}

QuizView.propTypes = {
  flipped: PropTypes.bool.isRequired,
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  definitionFirst: PropTypes.bool.isRequired,
  cardIndex: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
  onFlip: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
  onCorrect: PropTypes.func.isRequired,
  onIncorrect: PropTypes.func.isRequired,
  onDefinitionFirstChanged: PropTypes.func.isRequired,
}

export default QuizView;
