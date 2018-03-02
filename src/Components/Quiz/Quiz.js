import { connect } from 'react-redux'
import {
	flip, nextCard,
	correct, incorrect,
	definitionFirstChanged
} from '../../Actions/quiz'
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
			definitionFirst: state.quiz.definitionFirst,
			cardIndex: state.quiz.cardIndex,
			totalCards: state.notecards.length
		};
}

const mapDispatchToProps = dispatch => {
	return {
		onFlip:()=>dispatch(flip()),
		onNextCard:()=>dispatch(nextCard()),
		onCorrect: ()=>dispatch(correct()),
		onIncorrect: ()=>dispatch(incorrect()),
		onDefinitionFirstChanged: ()=>dispatch(definitionFirstChanged()),
	}
}

const Quiz = connect(
	mapStateToProps, mapDispatchToProps
)(NotecardViewer);

export default Quiz;
