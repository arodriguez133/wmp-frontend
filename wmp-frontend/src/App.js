import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Signup from './components/Signup';
import Home from "./components/Home";

function App() {
  return (
    <Router>
        <div className="App">
            <Link to="/Signup">Signup</Link>
            <Switch>
                <Route exact path = "/home" component={Home} />
                <Route path = "/Signup" component={Signup} />
            </Switch>
        </div>
    </Router>
  );
}
export default App;