import { connect } from 'react-redux'
import {gotoNotecardEditor} from '../Actions/quiz'
import NotecardViewer from './NotecardViewer'

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

const Quiz = connect(
	mapStateToProps, mapDispatchToProps
)(NotecardViewer);

export default Quiz;
