import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Nav from './Nav';
import Error from './Error';
import Update from './Update';
import User from './User';
import Adduser from './Adduser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/update/:id" component={Update} />
          <Route path="/User/:id" component={User} />
          <Route path="/Adduser" component={Adduser} />


          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
