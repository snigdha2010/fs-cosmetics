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
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
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
          <Route path = '*'>
             <NoMatch/>
          </Route>
        </Switch>
      </Router>

        
  
    </div>
  );
}

export default App;
