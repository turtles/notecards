import React from 'react';
import PropTypes from 'prop-types'
import {
  Label, Input, Row, Col, Button
} from 'reactstrap';

const NotecardListItem = (key, onUpdateNotecard, notecard) => (
      <Row>
          <Col>
              <Input id="word"
                value={notecard.word}
                onChange={()=>onUpdateNotecard(key, notecard)} />
          </Col>
          <Col>
              <Input id="definition"
                value={notecard.definition}
                onChange={()=>onUpdateNotecard(key, notecard)} />
          </Col>
      </Row>
  );

NotecardListItem.propTypes = {
  key: PropTypes.number.isRequired,
  onUpdateNotecard: PropTypes.func.isRequired,
  notecard: PropTypes.object.isRequired
}

export default NotecardListItem;
