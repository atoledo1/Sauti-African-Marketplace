import Login from "./component/Login";
import Register from "./component/Register";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routeProtected from "./util/routeProtected";
import Home from "./components/home";



const App = () => {
  return (
    <Router>
      <div className="App">
        <p>African Marketplace</p>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/Register" component={Register} />
        <Switch>
        <routeProtected exact path="/protected" component={Home} />
   
        
        </Switch>
      </div>
    </Router>
  );
};

export default App;