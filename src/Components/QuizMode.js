import { connect } from 'react-redux'
import {gotoNotecardEditor} from '../Actions/quiz'
import QuizMode from './QuizMode'

const mapStateToProps = state => {
	// return { notecards: state.notecards };
	return {};
}

const mapDispatchToProps = dispatch => {
	return {
		onAddNotecard: () => {
			dispatch(gotoNotecardEditor());
		},
	}
}

const QuizMode = connect(
	mapStateToProps, mapDispatchToProps
)(NotecardViewer);

export default QuizMode;
