import React, {Fragment} from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import {Switch, Route} from "react-router-dom"
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';

function App() {
  return (
    <Fragment>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </Fragment>
  )
}

export default App;
