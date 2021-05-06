import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/login";
import Register from "./components/Register";
import AddItem from "./components/AddItem";
import ModifyItem from "./components/ModifyItem";
import PrivateRoute from "./components/PrivateRoute";
import "antd/dist/antd.css";
import "./App.css";
import MyListings from "./components/MyProfile";


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
        

        <Navigation  loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
         


          <PrivateRoute path="/add-item">
            <AddItem />
          </PrivateRoute>

          <PrivateRoute path="/modify-item/:itemId">
            <ModifyItem />
          </PrivateRoute>

          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/mylistings">
            <MyListings />
          </PrivateRoute>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
