import {
	ADD_NOTECARD, REMOVE_NOTECARD, UPDATE_NOTECARD,
	IMPORT_NOTECARDS, EXPORT_NOTECARDS
} from '../Actions/notecardEditor'
import {saveAs} from 'file-saver'

const initialState =
	[
		{ id:1, word:"word :3", definition:"definition :3"},
		{ id:2, word:"React", definition: "A JavaScript library for building user interfaces" },
		{ id:3, word:"Node", definition: "A JavaScript runtime built on Chrome's V8 JavaScript engine"},
	];

const getCardById = (cardArray, id) => {
	return cardArray.find((card)=> (card.id === id));
};

const getCardIndex = (cardArray, id) => {
	return cardArray.findIndex((card)=> (card.id === id));
};

const notecards = (state = initialState, action) => {
	let card, updatedCards;
	switch (action.type) {
		case ADD_NOTECARD:
			// get next id by finding the max id in state and adding 1
			let nextId = 0;
			state.forEach(card=>{if (card.id >= nextId) nextId = card.id+1; });
			// merge state
			return [
				...state,
				{
					id: nextId, word:"", definition:""
				}
			];

		case REMOVE_NOTECARD:
			updatedCards = state.slice();
			updatedCards.splice(getCardIndex(updatedCards, action.id), 1);
			return updatedCards;

		case UPDATE_NOTECARD:
			updatedCards = state.slice();
			card = getCardById(updatedCards, action.id);
			card.word = action.word;
			card.definition = action.definition;
			return updatedCards;
		case IMPORT_NOTECARDS:
			console.log('import');
			return state;

		case EXPORT_NOTECARDS:
			console.log('export');
			return state;

		default:
			return state;
	}
}

export default notecards;
