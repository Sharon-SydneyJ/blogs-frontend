
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import irlogo from './irlogo.png';
import Home from './components/Home';
import UserContainer from './components/User/UserContainer';
import UserDetails from './components/User/UserDetails';
import BlogpostContainer from './components/Blog/BlogpostContainer';
import BlogpostDetails from './components/Blog/BlogpostDetails';

import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={irlogo} className="App-logo" alt="logo" />
        <Switch>
     <Route exact path="/">
       <Home />
       </Route>
       <Route exact path="/users">
       <UserContainer />
       </Route>
       <Route exact path="/users/:id">
       <UserDetails />
       </Route>
       <Route exact path="/blogposts">
       <BlogpostContainer />
       </Route>
       <Route path="/blogposts/:id">
       <BlogpostDetails />
       </Route>
       </Switch>
      </header> 
    </div>
   </Router>
  );
}
export default App;
