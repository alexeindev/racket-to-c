import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Compiller from '../pages/codes/Compiler';
import Practices from '../pages/practica/practicas';
import NotFound from '../pages/NotFound/NotFound';
import Start from '../pages/Start/Start.js';
import Module from '../pages/Module/Module.js';
import comparison from '../pages/Comparison/Comparison.js';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/menu" component={Home} />
        <Route path="/compiler" component={Compiller} />
        <Route path="/practice" component={Practices} />
        <Route path="/module/:modules" component={Module} />
        <Route path="/comparison/:code" component={comparison} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
