import '../../Styles/NotecardViewer.css';
import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,
  Button,
  Nav, NavItem, NavLink
} from 'reactstrap';
import { CSSTransition } from 'react-transition-group'

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
    flipped, word, definition, definitionFirst, cardIndex, totalCards,
    onFlip, onNextCard, onCorrect, onIncorrect, onDefinitionFirstChanged}) => {
  // TODO: Break into subcomponents
  let cardMenu = (!flipped ? (
      <Row>
        <Col sm={{size: 2, offset: 5}} className="text-center">
          <Button color="primary" onClick={onFlip}>Flip</Button>
        </Col>
        <Col sm={{size: 2, offset: 1}} className="text-center">
          <Button onClick={onNextCard}>Skip</Button>
        </Col>
      </Row>
    ) : (
      <Row>
        <Col sm={{size: 2, offset: 4}} className="text-center">
          <Button color="danger" onClick={onIncorrect}>
            No
          </Button>
        </Col>
        <Col sm={{size: 2}} className="text-center">
          <Button color="success" onClick={onCorrect}>
            Yes
          </Button>
        </Col>
      </Row>
    ));

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
          <NavItem>
            <NavLink disabled href="#"></NavLink>
          </NavItem>
        </Nav>
        </Col>
        <Col className="text-right">
          {cardIndex+1}/{totalCards}
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
      {cardMenu}
    </div>
  );
}

export default NotecardViewer;
