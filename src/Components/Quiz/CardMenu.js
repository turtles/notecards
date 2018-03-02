import '../../Styles/NotecardViewer.css';
import React from 'react';
import PropTypes from 'prop-types'
import {
  Row,Col,Button,
  Nav, NavItem, NavLink
} from 'reactstrap';

const CardMenu = ({flipped, onFlip, onSkip, onCorrect, onIncorrect})=>{
  if (!flipped) {
    return (
      <Row>
        <Col sm={{size: 2, offset: 5}} className="text-center">
          <Button color="primary" onClick={onFlip}>Flip</Button>
        </Col>
        <Col sm={{size: 2, offset: 1}} className="text-center">
          <Button onClick={onSkip}>Skip</Button>
        </Col>
      </Row>
    );
  }
  else {
    return (
      <Row>
        <Col sm={{size: 2, offset: 4}} className="text-center">
          <Button color="danger" onClick={onIncorrect}>
            No
          </Button>
        </Col>
        <Col sm={{size: 2}} className="text-center">
          <Button color="success" onClick={onCorrect}>
            Yes
          </Button>
        </Col>
      </Row>
    );
  }
};

export default CardMenu;
