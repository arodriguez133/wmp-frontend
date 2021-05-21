import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Signup from './components/Signup';
import Home from "./components/Home";
import Plant from "./components/Plant";

function App() {
  return (
    <Router>
        <div className="App">
            <Link to="/Signup">Signup</Link>
            <Switch>
                <Route exact path = "/home" component={Home} />
                <Route path = "/Signup" component={Signup} />
                <Route path = "plants/:id" component={Plant} />
            </Switch>
        </div>
    </Router>
  );
}
export default App;