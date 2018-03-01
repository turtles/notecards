import { connect } from 'react-redux'
import {addNotecard, removeNotecard, updateNotecard,
				importNotecards, exportNotecards} from '../Actions/notecardEditor'
import { gotoQuiz } from '../Actions/menu'
import NotecardList from './NotecardList'

const mapStateToProps = state => {
	return { notecards: state.notecards };
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
		},
		onImportNotecards: ()=>{
			dispatch(importNotecards());
		},
		onExportNotecards: ()=>{
			dispatch(exportNotecards());
		},
		onStartQuiz: ()=>{
			dispatch(gotoQuiz());
		}
	}
}

const NotecardEditor = connect(
	mapStateToProps, mapDispatchToProps
)(NotecardList);

export default NotecardEditor;
