import '../Styles/NotecardViewer.css';
import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,
  Button,
  Nav, NavItem, NavLink
} from 'reactstrap';
import { CSSTransition } from 'react-transition-group'

const Fade = ({ children, ...props }) => (
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

const NotecardViewer = ({flipped, word, definition, definitionFirst, onFlip, onNextCard, onPreviousCard, onCorrect, onIncorrect, onDefinitionFirstChanged}) => {
  let cardMenu = (!flipped ? (
      <Row>
        <Col sm={{size: 2, offset: 2}}>
          <Button onClick={onPreviousCard}>Previous</Button>
        </Col>
        <Col sm={{size: 2}}>
          <Button onClick={onFlip}>Flip</Button>
        </Col>
        <Col sm={{size: 2}}>
          <Button onClick={onNextCard}>Next</Button>
        </Col>
      </Row>
    ) : (
      <Row>
        <Col sm={{size: 2, offset: 3}}><Button onClick={onNextCard}>Yes</Button></Col>
        <Col sm={{size: 2}}><Button onClick={onNextCard}>No</Button></Col>
      </Row>
    ));

  let navItemDefinitionFirst = (definitionFirst ?
    (<NavItem><NavLink href="#" onClick={onDefinitionFirstChanged}>Definition</NavLink></NavItem>) :
    (<NavItem><NavLink href="#" onClick={onDefinitionFirstChanged}>Word</NavLink></NavItem>)
  );

  return (
    <div>
      <Nav>
        {navItemDefinitionFirst}
      </Nav>
      <Fade in={!!flipped}>
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
      </Fade>
      <br/>
      <br/>
      {cardMenu}
    </div>
  );
}

export default NotecardViewer;
