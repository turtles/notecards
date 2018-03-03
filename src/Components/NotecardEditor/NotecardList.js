import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,Input,
  Button,
  Nav, NavItem, NavLink
} from 'reactstrap'
import NotecardEditorMenu from './NotecardEditorMenu.js'

// TODO: Break into subcomponents

const NotecardList = ({notecards,
                        onAddNotecard, onRemoveNotecard, onUpdateNotecard,
                        onImportNotecards, onExportNotecards}) => (
  <div>
    <NotecardEditorMenu
      onImportNotecards={onImportNotecards}
      onExportNotecards={onExportNotecards} />

    {notecards.map((notecard, index) => (
        <Row key={notecard.id}>
          <Col xs="3">
            <Input value={notecard.word}
                onChange={(e)=>onUpdateNotecard(notecard.id, e.target.value, notecard.definition)} />
          </Col>
          <Col xs="8">
            <Input value={notecard.definition} type="textarea"
                onChange={(e)=>onUpdateNotecard(notecard.id, notecard.word, e.target.value)} />
          </Col>
          <Col xs="1">
            <Button onClick={()=>onRemoveNotecard(notecard.id)}>x</Button>
          </Col>
        </Row>
      ))}

    <br/>
    <Row>
      <Col sm={{size: 2, offset: 5}}>
        <Button onClick={onAddNotecard}>Add card</Button>
      </Col>
    </Row>
  </div>
)

NotecardList.propTypes = {
  notecards: PropTypes.array.isRequired,
  onAddNotecard: PropTypes.func.isRequired,
  onRemoveNotecard: PropTypes.func.isRequired,
  onUpdateNotecard: PropTypes.func.isRequired,
  onImportNotecards: PropTypes.func.isRequired,
  onExportNotecards: PropTypes.func.isRequired,
}

export default NotecardList;
