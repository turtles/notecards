import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,Input,
  Button,
  Nav, NavItem, NavLink
} from 'reactstrap';

// TODO: Use NotecardListItem (had some trouble mapping properties)

const NotecardList = ({notecards,
                        onAddNotecard, onRemoveNotecard, onUpdateNotecard,
                        onImportNotecards, onExportNotecards}) => (
  <div>
    <h2>Edit Notecards</h2>
    <Nav>
      <NavItem>
        <NavLink href="#" onClick={onImportNotecards}>Import</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" onClick={onExportNotecards}>Export</NavLink>
      </NavItem>
    </Nav>
    <Row>
      <Col sm={{size: 2, offset: 5}}>
        <Button>Start Quiz</Button>
      </Col>
    </Row>
    <br/>
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
  notecards: PropTypes.object.isRequired,
  onAddNotecard: PropTypes.func.isRequired,
  onRemoveNotecard: PropTypes.func.isRequired,
  onUpdateNotecard: PropTypes.func.isRequired
}

export default NotecardList;
