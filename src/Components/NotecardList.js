import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NotecardListItem from './NotecardListItem.js';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';


const NotecardList = ({notecards, onAddNotecard, onRemoveNotecard, onUpdateNotecard}) => (
  <div>
    {notecards.map((notecard, index) => (
      <Row>
      <NotecardListItem key={index}
        onUpdateNotecard={onUpdateNotecard}
        notecard={notecard} />
      <Button onClick={()=>onRemoveNotecard(index)}>x</Button>
      </Row>
    ))}

    <Button onClick={onAddNotecard}>+</Button>
  </div>
)

NotecardList.propTypes = {
  notecards: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      definition: PropTypes.string.isRequired
    })
  ),
  onAddNotecard: PropTypes.func.isRequired,
  onRemoveNotecard: PropTypes.func.isRequired,
  onUpdateNotecard: PropTypes.func.isRequired
}

export default NotecardList;
