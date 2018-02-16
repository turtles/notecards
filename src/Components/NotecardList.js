import React, { Component } from 'react';
import NotecardListItem from './NotecardListItem.js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class NotecardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current:2,
      cards: [
        {
          key:1,
          word: "word",
          defintiion: "definition"
        }
      ]
    };

    // Bind some functions
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
  }
  addCard() {
  }
  removeCard(key) {
  }
  updateCard(key, word, def) {
  }
  render() {
    const notecards = this.state.cards.map((card)=>
        (
          <Row>
            <Col><NotecardListItem key={card.key} word={card.word} definition={card.definition} updateCard={this.updateCard}/></Col>
            <Col>
              <Button color="danger" onClick={()=>this.removeCard(card.key)}>Delete</Button>
            </Col>
          </Row>
        )
      );

    return (
      <div>
        {notecards}
        <Button color="primary" onClick={this.addCard}>+</Button>
      </div>
    );
  }
}

export default NotecardList;