import './App.css';
import { Switch, Route } from 'react-router-dom';
import Immigration from './pages/Immigration';
import Advice from './pages/Advice';
import Main from './pages/Main';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/immigration" exact component={Immigration}/>
        <Route path="/advice" exact component={Advice}/>
        <Route path="/main" exact component={Main}/>
      </Switch>
     </div>
  );
}

export default App;

