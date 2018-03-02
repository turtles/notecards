import { connect } from 'react-redux'
import {
	gotoQuiz,
	gotoNotecardEditor
} from '../Actions/menu'
import { definitionFirstChanged } from '../Actions/quiz'
import MenuTop from './MenuTop'

const mapStateToProps = state => {
	console.log('state.quiz.definitionFirst');
	console.log(state.quiz.definitionFirst);
	return {
		view: state.menu.view,
		definitionFirst: state.quiz.definitionFirst
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onGotoQuiz: ()=>{
			dispatch(gotoQuiz());
		},
		onGotoNotecardEditor: ()=>{
			dispatch(gotoNotecardEditor());
		},
		onDefinitionFirstChanged: ()=>{
			dispatch(definitionFirstChanged());
		},
	}
}

const Menu = connect(
	mapStateToProps, mapDispatchToProps
)(MenuTop);

export default Menu;
