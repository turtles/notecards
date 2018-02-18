import { connect } from 'react-redux'
import NotecardList from './NotecardList'
import {addNotecard, removeNotecard, updateNotecard} from '../actions'

const mapStateToProps = state => {
	return {
		notecards: state.notecards
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddNotecard: () => {
			dispatch(addNotecard());
		},
		onRemoveNotecard: (id) => {
			dispatch(removeNotecard(id));
		},
		onUpdateNotecard: (id, notecard) => {
			dispatch(updateNotecard(id, notecard));
		}
	}
}

const NotecardEditor = connect(
	mapStateToProps, mapDispatchToProps
)(NotecardList);


export default NotecardEditor;
