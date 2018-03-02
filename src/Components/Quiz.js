import { connect } from 'react-redux'
import {flip, nextCard, previousCard, correct, incorrect} from '../Actions/quiz'
import NotecardViewer from './NotecardViewer'

const mapStateToProps = state => {
	let card = state.notecards[state.quiz.cardIndex];
	if (card === undefined) {
		card = {
			word: 'missing word',
			definition: 'missing definition'
		};
	}
	return {
			flipped: state.quiz.flipped,
			word: card.word,
			definition: card.definition,
			definitionFirst: state.quiz.definitionFirst
		};
}

const mapDispatchToProps = dispatch => {
	return {
		onFlip:()=>dispatch(flip()),
		onNextCard:()=>dispatch(nextCard()),
		onPreviousCard:()=>dispatch(previousCard()),
		onCorrect: ()=>dispatch(correct()),
		onIncorrect: ()=>dispatch(incorrect())
	}
}

const Quiz = connect(
	mapStateToProps, mapDispatchToProps
)(NotecardViewer);

export default Quiz;
