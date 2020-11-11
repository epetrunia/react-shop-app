import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignInSignUp from './pages/SignInSignUp';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </>
    );
  }
}

export default App;
