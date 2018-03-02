import {
	FLIP, NEXT_CARD, PREVIOUS_CARD, CORRECT, INCORRECT, DEFINITION_FIRST_CHANGED
} from '../Actions/quiz'
import {GOTO_QUIZ} from '../Actions/menu'


const initialState = {cardIndex:0, flipped:false, definitionFirst:false};

const quiz = (state = initialState, action) => {
	switch (action.type) {
		case CORRECT:
		// TODO: Add incorrect logic (add notecard to end).
		// Currently, it falls through to next card.
		case INCORRECT:
		case NEXT_CARD:
			return {
				...state,
				cardIndex: state.cardIndex+1,
				flipped: false
			};

		case GOTO_QUIZ:
			// New game logic here
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
