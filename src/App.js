import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/shop' component={Shop} />
    </Switch>
  );
}

export default App;
