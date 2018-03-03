import '../../Styles/QuizView.css';
import React from 'react';
import PropTypes from 'prop-types'
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
    flipped, word, definition, cardIndex, definitionFirst,
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
      onFlip={onFlip} onSkip={onSkip} onCorrect={onCorrect} onIncorrect={()=>onIncorrect(cardIndex)} />
  </div>
);

NotecardViewer.propTypes = {
  flipped: PropTypes.bool.isRequired,
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  cardIndex: PropTypes.number.isRequired,
  definitionFirst: PropTypes.bool.isRequired,
  onFlip: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
  onCorrect: PropTypes.func.isRequired,
  onIncorrect: PropTypes.func.isRequired,
}

export default NotecardViewer;
