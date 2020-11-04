import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';

function HatsPage() {
  return <h1>Hats Page</h1>;
}

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;
