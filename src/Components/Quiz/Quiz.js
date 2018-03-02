import { connect } from 'react-redux'
import {
	flip, nextCard,
	correct, incorrect,
	definitionFirstChanged,
	restartQuiz
} from '../../Actions/quiz'
import QuizView from './QuizView'

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
		onSkip:()=>dispatch(nextCard()),
		onCorrect: ()=>dispatch(correct()),
		onIncorrect: ()=>dispatch(incorrect()),
		onDefinitionFirstChanged: ()=>dispatch(definitionFirstChanged()),
		onRestartQuiz: ()=>dispatch(restartQuiz())
	}
}

const Quiz = connect(
	mapStateToProps, mapDispatchToProps
)(QuizView);

export default Quiz;
