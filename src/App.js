import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </>
  );
}

export default App;
