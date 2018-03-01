import { combineReducers } from 'redux'
import notecards from './notecards'
import menu from './menu'
import quiz from './quiz'

const notecardsAppReducers = combineReducers({
	notecards, menu, quiz
});

export default notecardsAppReducers;
