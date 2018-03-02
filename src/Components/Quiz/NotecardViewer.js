import '../../Styles/NotecardViewer.css';
import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,
  Button,
  Nav, NavItem, NavLink
} from 'reactstrap';
import { CSSTransition } from 'react-transition-group'
import CardCounter from './CardCounter'
import CardMenu from './CardMenu'

const CardTransitions = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames="flip">
    {children}
  </CSSTransition>
);
const Swap = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames="swap">
    {children}
  </CSSTransition>
);

const NotecardViewer = ({
    // State
    flipped, word, definition, definitionFirst, cardIndex, totalCards,
    // Dispatch
    onFlip, onSkip, onCorrect, onIncorrect, onDefinitionFirstChanged}) => {

  let navItemDefinitionFirst = (definitionFirst ?
    (<NavItem><NavLink href="#" onClick={onDefinitionFirstChanged}>Definition</NavLink></NavItem>) :
    (<NavItem><NavLink href="#" onClick={onDefinitionFirstChanged}>Word</NavLink></NavItem>)
  );

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
      <CardTransitions in={!!flipped}>
        <table className="Notecard">
          <tbody>
            <tr>
              <td className="text-center align-middle">
                <Swap in={!flipped} className="cardFrontText">
                  <p>{definitionFirst ? definition : word}</p>
                </Swap>
                <Swap in={!!flipped} className="cardBackText">
                  <p>{definitionFirst ? word : definition}</p>
                </Swap>
              </td>
            </tr>
          </tbody>
        </table>
      </CardTransitions>
      <br/>
      <br/>
      <CardMenu flipped={!!flipped}
        onFlip={onFlip} onSkip={onSkip} onCorrect={onCorrect} onIncorrect={onIncorrect} />
    </div>
  );
}

export default NotecardViewer;
