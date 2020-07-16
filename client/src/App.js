import React, {Component} from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
// import {loadUser} from './actions/authActions'

//Components
import Landing from '../src/components/Landing'
import Nav from '../src/components/Nav'
import SignIn from '../src/components/authorization/SignIn'
import SignUp from '../src/components/authorization/SignUp'
import EditNote from '../src/components/notes/EditNote'
import NewNote from '../src/components/notes/NewNote'
import Note from '../src/components/notes/Note'
import NotesIndex from '../src/components/notes/NotesIndex'

//Styles
import '../src/sass/main.css'

class App extends Component{
  //Check for Token and Load User when App Loads
  // componentDidMount(){
  //   store.dispatch(loadUser());
  // }
  render(){
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
    
              <Route exact path="/editnote" component={EditNote} />
              <Route exact path="/newnote" component={NewNote} />
              <Route exact path="/note" component={Note} />
              <Route exact path="/notesindex" component={NotesIndex} />
    
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
