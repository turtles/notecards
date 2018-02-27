import React from 'react';
import PropTypes from 'prop-types'
import {
  Input, Row, Col
} from 'reactstrap';

const NotecardListItem = (key, word, definition, onUpdateNotecard) => (
    <Row>
        <Col xs="3">
            <Input id="word"
              type="text"
              value={word}
              onChange={(e)=>onUpdateNotecard(e)} />
        </Col>
        <Col xs="auto">
            <Input id="definition"
              type="text"
              value={definition}
              onChange={(e)=>onUpdateNotecard(e)} />
        </Col>
    </Row>
  );

NotecardListItem.propTypes = {
  key: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  onUpdateNotecard: PropTypes.func.isRequired,
}

export default NotecardListItem;
