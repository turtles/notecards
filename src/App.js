import { connect } from 'react-redux'
import React from 'react';
import NotecardEditor from './Components/NotecardEditor/NotecardEditor';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz/Quiz';
import {Container} from 'reactstrap'
import './App.css'
import Footer from './Footer';

const AppContainer = ({view}) => {
  let body;
  if (view === 'quiz') {
    body = <Quiz/>;
  } else {
    body = <NotecardEditor/>;
  }

  return (
    <Container>
      <div className="App">
        <Menu/>
        {body}
      </div>
      <Footer/>
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
