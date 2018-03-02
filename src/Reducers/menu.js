import {
	GOTO_NOTECARD_EDITOR, GOTO_QUIZ
} from '../Actions/menu'

const initialState = {
	view: 'notecardEditor'
}

const menu = (state = {}, action) => {
	switch (action.type) {

		case GOTO_NOTECARD_EDITOR:
			return {...state, view: 'notecardEditor'};

		case GOTO_QUIZ:
			return {...state, view: 'quiz'};

		default:
			return state;
	}
}

export default menu;
