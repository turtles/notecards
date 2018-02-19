import {
	ADD_NOTECARD,
	REMOVE_NOTECARD,
	UPDATE_NOTECARD
} from '../actions'

const initialState =
	[{
		id:1,
		word:"word",
		definition:"definition"
	}];

const notecards = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NOTECARD:
			// get next id by finding the max id in state and adding 1
			let nextId = 0;
			for (var i = 0; i < state.length; ++i) {
				if (nextId < state[i].id) nextId = state[i].id;
			}
			nextId++;
			// merge state
			return [
				...state,
				{
					id: nextId,
					word:"",
					definition:""
				}
			];
		case REMOVE_NOTECARD:
		// TODO: lookup by id
			let deletedCards = state.slice();
			deletedCards.splice(action.id-1, 1);
			return deletedCards;
		case UPDATE_NOTECARD:
			let updatedCards = state.slice();
			// TODO: lookup by id
			updatedCards[action.id-1].word = action.word;
			updatedCards[action.id-1].definition = action.definition;
			return updatedCards;

		default:
			return state;
	}
}

export default notecards;
