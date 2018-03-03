import { connect } from 'react-redux'
import React from 'react';
import NotecardEditor from './Components/NotecardEditor/NotecardEditor';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz/Quiz';
import {Container} from 'reactstrap'
import './App.css'

const AppContainer = ({view}) => {
  let body;
  if (view === 'quiz') {
    body = <Quiz/>;
  } else {
    body = <NotecardEditor/>;
  }

  return (
    <Container className="App">
      <Menu/>
      {body}
    </Container>
  );
}

const mapStateToProps = state => {
	return { view: state.menu.view };
}

const App = connect(
	mapStateToProps
)(AppContainer);

export default App;
