import React, { Component } from 'react';
import {
  Label, Input, Row, Col, Button
} from 'reactstrap';

class NotecardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.changedInputWord = this.changedInputWord.bind(this);
    this.changedInputDefinition = this.changedInputDefinition.bind(this);
  }
  changedInputWord(event) {
  }
  changedInputDefinition(event) {
  }
  render() {
    return (
      <Row>
          <Col>
              <Input id="word"
                value={this.state.word}
                onChange={this.changedInputWord} />
          </Col>
          <Col>
              <Input id="definition"
                value={this.state.definition}
                onChange={this.changedInputDefinition} />
          </Col>
      </Row>
    );
  }
}

export default NotecardList;