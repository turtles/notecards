import {
	GOTO_NOTECARD_EDITOR, GOTO_QUIZ
} from '../Actions/menu'

const menu = (state = {}, action) => {
	switch (action.type) {

		case GOTO_NOTECARD_EDITOR:
			console.log('meow');
			return {...state, view: 'notecardEditor'};

		case GOTO_QUIZ:
			console.log('alternative meow');
			if (state.view === 'quiz') {
					return {...state, view: 'notecardEditor'};
			} else {
					return {...state, view: 'quiz'};
			}


		default:
			console.log('default?!?!?!');
			return state;
	}
}

export default menu;
