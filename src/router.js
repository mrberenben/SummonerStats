import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// PAGES
import Homepage from './pages/homepage';
import SummonerPage from './pages/summonerpage';

// LAYOUT
import AppHeader from './layout/appHeader';


export default function Router() {
  return (
    <BrowserRouter>
      <AppHeader />
      
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/summoner/:region/:summonerName" component={SummonerPage} />
      </Switch>
    </BrowserRouter>
  );
}