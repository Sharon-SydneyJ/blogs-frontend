
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import irlogo from './irlogo.png';
import Home from './Components/Home';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1> The Indigo Room Blogs </h1>
        <img src={irlogo} className="App-logo" alt="logo" />
        <Switch>
     <Route exact path="/">
       <Home />
       </Route>
       </Switch>
      </header> 
    </div>
   </Router>
  );
}
export default App;
