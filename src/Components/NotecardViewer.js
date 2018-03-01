import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,
  Button
} from 'reactstrap';

// TODO: Use NotecardListItem (had some trouble mapping properties)

const NotecardViewer = () => (
  <div>
    <Row>
      <Col sm={{size: 2, offset: 5}}>
        <Button onClick>this is a button wtf</Button>
      </Col>
    </Row>
  </div>
)

// NotecardList.propTypes = {
//   notecards: PropTypes.object.isRequired,
//   onAddNotecard: PropTypes.func.isRequired,
//   onRemoveNotecard: PropTypes.func.isRequired,
//   onUpdateNotecard: PropTypes.func.isRequired
// }

export default NotecardViewer;
