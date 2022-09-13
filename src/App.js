import { BrowserRouter,Switch,Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

// Import the functions you need from the SDKs you need



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Signup/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
