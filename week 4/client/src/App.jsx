
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Pages/Login';
import { PrivateRoute } from './components/Routes/PrivateRoute'
import Profile from './components/Pages/Profile';
import Home from './components/Pages/Home';
import Album from './components/Pages/Album';
import { useParams } from 'react-router';
function App() {

  console.log('id:', useParams())
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
       
        <Route exact path="/home" >
          <Home></Home>
        </Route>
        <Route  path="/album" >
          <Album></Album>
        </Route>
        <Route path="/login" >
          <Login></Login>
        </Route>
        <Route path="/profile" >
          <Profile></Profile>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
