import React from 'react';
import NotecardEditor from './Components/NotecardEditor.js';
import Menu from './Components/Menu.js';
import {Container} from 'reactstrap'
const App = () => (
  <Container>
    <Menu/>
    <NotecardEditor/>
  </Container>
)

export default App;
