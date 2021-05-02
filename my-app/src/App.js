import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import RouteProtected from "./util/routeProtected";
import Home from "./components/home";
import AddItem from "./components/addProduct";
// import MyProfile from "./components/myprofile";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState({
    username: "",
    id: "",
  });
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <p>African Marketplace</p>
        <Switch>
          <Route path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/register" component={Register} />

          <RouteProtected path="/" component={Home} />
          {/* <RouteProtected path="/myprofile" component={MyProfile} /> */}
          <RouteProtected path="/additem" component={AddItem} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
