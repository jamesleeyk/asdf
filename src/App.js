import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Immigration from './pages/Immigration';
import Advice from './pages/Advice';
import LawTypes from './pages/LawTypes';
import Main from './pages/Main';
import Home from './pages/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/immigration" exact component={Immigration} />
        <Route path="/advice" exact component={Advice} />
        <Route path="/main" exact component={Main} />
        <Route path="/law-types" exact component={LawTypes} />
      </Switch>
    </div>
  );
}

export default App;
