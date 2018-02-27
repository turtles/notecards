import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,Input,
  Button,
  Nav, NavItem, NavLink
} from 'reactstrap';

// TODO: Use NotecardListItem (had some trouble mapping properties)

const NotecardList = ({notecards, onAddNotecard, onRemoveNotecard, onUpdateNotecard}) => (
  <div>
    <h2>Edit Notecards</h2>
    <Nav>
      <NavItem>
        <NavLink href="#">Import</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Export</NavLink>
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
          <Col>
            <Input value={notecard.word}
                onChange={(e)=>onUpdateNotecard(notecard.id, e.target.value, notecard.definition)} />
          </Col>
          <Col>
            <Input value={notecard.definition}
                onChange={(e)=>onUpdateNotecard(notecard.id, notecard.word, e.target.value)} />
          </Col>
          <Button onClick={()=>onRemoveNotecard(notecard.id)}>x</Button>
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
