import '../../Styles/QuizView.css';
import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,
  Nav, NavItem, NavLink
} from 'reactstrap';
import { CSSTransition } from 'react-transition-group'
import NotecardViewerMenu from './NotecardViewerMenu'

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
    flipped, word, definition, definitionFirst,
    onFlip, onSkip, onCorrect, onIncorrect
  })=>(
  <div>
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
    <NotecardViewerMenu flipped={!!flipped}
      onFlip={onFlip} onSkip={onSkip} onCorrect={onCorrect} onIncorrect={onIncorrect} />
  </div>
);

export default NotecardViewer;
