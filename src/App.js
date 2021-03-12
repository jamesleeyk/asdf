import './App.css';
import Home from './pages/Home';
import Immigration from './pages/Immigration';
import Advice from './pages/Advice';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/immigration" exact component={Immigration}/>
        <Route path="/advice" exact component={Advice}/>
      </Switch>
     </div>
  );
}

export default App;

