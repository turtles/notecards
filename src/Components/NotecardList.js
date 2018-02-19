import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,Input,
  Button
} from 'reactstrap';

// TODO: Use NotecardListItem (had some trouble mapping properties)

const NotecardList = ({notecards, onAddNotecard, onRemoveNotecard, onUpdateNotecard}) => (
  <div>
    {notecards.map((notecard, index) => (
        <Row key={notecard.id}>
          <Col>
            <Input
                    value={notecard.word}
                    onChange={(e)=>onUpdateNotecard(notecard.id, e.target.value, notecard.definition)} />
          </Col>
          <Col>
            <Input
                    value={notecard.definition}
                    onChange={(e)=>onUpdateNotecard(notecard.id, notecard.word, e.target.value)}
                   />
          </Col>
          <Button onClick={()=>onRemoveNotecard(notecard.id)}>x</Button>
        </Row>
      ))}
    <Button onClick={onAddNotecard}>+</Button>
  </div>
)

NotecardList.propTypes = {
  notecards: PropTypes.object.isRequired,
  onAddNotecard: PropTypes.func.isRequired,
  onRemoveNotecard: PropTypes.func.isRequired,
  onUpdateNotecard: PropTypes.func.isRequired
}

export default NotecardList;
