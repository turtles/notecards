import { combineReducers } from 'redux'

import {
	ADD_NOTECARD,
	REMOVE_NOTECARD,
	UPDATE_NOTECARD
} from '../actions'

const notecards = (state = [], action) => {
	switch (action.type) {
		case ADD_NOTECARD:
			let addedNotecards = state.notecards.slice();
			addedNotecards.push({word:"testword", definition:"testdef"});
			return [
				notecards: addedNotecards
			];
		case REMOVE_NOTECARD:
			let deletedCards = state.notecards.slice();
			deletedCards.splice(action.index, 1);
			return [
				notecards: deletedCards
			];
		case UPDATE_NOTECARD:
			let updatedCards = state.notecards.slice();
			updatedCards[action.index].word = action.word;
			updatedCards[action.index].definition = action.definition;
			return [
				notecards: updatedCards
			];

		default:
			return state;
	}
}

export default notecards;
