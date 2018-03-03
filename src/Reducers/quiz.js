import {
	FLIP, NEXT_CARD, PREVIOUS_CARD, CORRECT, INCORRECT, DEFINITION_FIRST_CHANGED,
	RESTART_QUIZ
} from '../Actions/quiz'
import {GOTO_QUIZ} from '../Actions/menu'


const initialState = {
	cardIndex:0, flipped:false, definitionFirst:false
};

const quiz = (state = initialState, action) => {
	switch (action.type) {
		case CORRECT:
		case NEXT_CARD:
			return {
				...state,
				cardIndex: state.cardIndex+1,
				flipped: false
			};
		case INCORRECT:
			// Don't increment card index.
			// Instead, let notecards reducer move the notecard to the end.
			return {
				...state,
				flipped: false
			};
		case GOTO_QUIZ:
		case RESTART_QUIZ:
			// New quiz logic here
			return {...state, cardIndex: 0, flipped: false};

		case PREVIOUS_CARD:
			return {
				...state,
				cardIndex: Math.max(0,state.cardIndex-1),
				flipped: false
			};

		case FLIP:
			return {...state, flipped: !state.flipped};

		case DEFINITION_FIRST_CHANGED:
			return {...state, definitionFirst: !state.definitionFirst};

		default:
			return state;
	}
}

export default quiz;
