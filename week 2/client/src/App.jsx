
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Pages/Login';
import { PrivateRoute } from './components/Routes/PrivateRoute'
import Register from './components/Pages/Register';
import Contest from './components/Pages/Contest';
import Users from './components/Pages/Users';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route exact path="/users" >
          <Users></Users>
        </Route>
        <Route exact path="/contest" >
          <Contest></Contest>
        </Route>
        <Route path="/login" >
          <Login></Login>
        </Route>
        <Route path="/register" >
          <Register></Register>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
