import { connect } from 'react-redux'
import {addNotecard, removeNotecard, updateNotecard} from '../actions'
import NotecardList from './NotecardList'

const mapStateToProps = state => {
	console.log(state.notecards);
	return {
		notecards: state.notecards
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onAddNotecard: () => {
			dispatch(addNotecard());
		},
		onRemoveNotecard: (id) => {
			dispatch(removeNotecard(id));
		},
		onUpdateNotecard: (id, word, definition) => {
			dispatch(updateNotecard(id, word, definition));
		}
	}
}

const NotecardEditor = connect(
	mapStateToProps, mapDispatchToProps
)(NotecardList);

export default NotecardEditor;
