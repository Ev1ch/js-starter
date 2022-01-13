import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Routes from 'common/enums/routes';
import { Home } from 'containers';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.HOME} element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
