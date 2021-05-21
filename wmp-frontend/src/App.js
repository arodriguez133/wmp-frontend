import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
        <div className="App">
            <Link to="/Signup">Signup</Link>
            <Switch>
                <Route path="/Signup" component={Signup}/>
            </Switch>
        </div>
    </Router>
  );
}
export default App;