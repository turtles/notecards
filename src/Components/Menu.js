import { connect } from 'react-redux'
import { gotoQuiz, gotoNotecardEditor } from '../Actions/menu'
import MenuTop from './MenuTop'

const mapStateToProps = state => {
	return { view: state.view };
}

const mapDispatchToProps = dispatch => {
	return {
		onGotoQuiz: ()=>{
			dispatch(gotoQuiz());
		},
		onGotoNotecardEditor: ()=>{
			dispatch(gotoNotecardEditor());
		}
	}
}

const Menu = connect(
	mapStateToProps, mapDispatchToProps
)(MenuTop);

export default Menu;
