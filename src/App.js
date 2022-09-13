import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user, authIsReady} = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user &&<Home />}
              {!user && <Redirect to="login"/>}
            </Route>
            <Route exact path="/login">
             {!user && <Login /> }
             {user && <Redirect to="/" />}
            </Route>
            <Route exact path="/register">
              {!user && <Signup />}
              {user && <Redirect to="/"/>}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
