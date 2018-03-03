import {
	ADD_NOTECARD, REMOVE_NOTECARD, UPDATE_NOTECARD,
	IMPORT_NOTECARDS, EXPORT_NOTECARDS
} from '../Actions/notecardEditor'
import {GOTO_QUIZ, GOTO_NOTECARD_EDITOR} from '../Actions/menu'
import {INCORRECT} from '../Actions/quiz'
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

const removeBlankCards = (cardArray) => {
	return cardArray.filter(card=> card.word.trim()!=="" || card.definition.trim()!=="");
};

const shuffleCards = (cards)=>{
	return shuffleArray(cards);
};

const orderCardsByIndex = (cards) => {
	return cards.sort((a,b) => a.id > b.id);
}

const parseCSVNotecards = (parseCSVNotecards) => {
	let newCardArray = [];
	for (var i = 1; i < parseCSVNotecards.length; ++i) {
		newCardArray.push({
			id: parseCSVNotecards[i][0],
			word: parseCSVNotecards[i][1],
			definition: parseCSVNotecards[i][2],
		})
	}
	return newCardArray;
}

// Shuffle function by @BetonMAN
const shuffleArray = arr => arr.map(a => [Math.random(), a])
													    .sort((a, b) => a[0] - b[0])
													    .map(a => a[1]);

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
			console.log(action.results);
			return parseCSVNotecards(action.results);

		case EXPORT_NOTECARDS:
			console.log("export");
			return state;

		case INCORRECT:
			// Move card to end
			updatedCards = state.slice();
			let tempCard = updatedCards[action.cardIndex];
			updatedCards[action.cardIndex] = updatedCards[updatedCards.length-1];
			updatedCards[updatedCards.length-1] = tempCard;
			return updatedCards;

		case GOTO_QUIZ:
			return shuffleCards(removeBlankCards(state));

		case GOTO_NOTECARD_EDITOR:
			return orderCardsByIndex(state);

		default:
			return state;
	}
}

export default notecards;
