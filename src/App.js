import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import NoMatch from './components/NoMatch/NoMatch';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Shipment from './components/Shipment/Shipment';
import LogIn from './components/LogIn/LogIn';
function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch> 
          <Route exact path = '/'>
              <Shop/>
          </Route>
          <Route path = '/shop'>
              <Shop/>
          </Route>
          <Route path = '/review' >
              <Review/>
          </Route>
          <Route path = '/product/:productKey'>
             <ItemDetail/>
          </Route>
          <Route path = '/shipment'>
            <Shipment/>
          </Route>
          <Route path = '/log-in'>
            <LogIn/>
          </Route>
          <Route path = '*'>
             <NoMatch/>
          </Route>
        </Switch>
      </Router>

        
  
    </div>
  );
}

export default App;
