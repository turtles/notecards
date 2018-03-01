import '../Styles/NotecardViewer.css';
import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,
  Button
} from 'reactstrap';

const NotecardViewer = () => (
  <div>
    <div >
    </div>
    <table className="Notecard">
      <tbody>
        <tr>
          <td className="text-center align-middle">
            <p className="NotecardText">This is a definition.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <br/>
    <Row>
    <br/>
    <Col sm={{size: 2, offset: 5}}>
      <Button>Flip</Button>
    </Col>
    </Row>
  </div>
);

export default NotecardViewer;
