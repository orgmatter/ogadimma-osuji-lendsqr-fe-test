import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Routes as ROUTES } from "./routes";
import './scss/app.scss';

const dashboardRouteProps = ROUTES.find(dashboardRouteProp => dashboardRouteProp.name === "Dashboard");

const customer = dashboardRouteProps?.dashboardRoutes?.find(dashboardRoute => dashboardRoute.title === "CUSTOMERS");
const business = dashboardRouteProps?.dashboardRoutes?.find(dashboardRoute => dashboardRoute.title === "BUSINESSES");
const setting = dashboardRouteProps?.dashboardRoutes?.find(dashboardRoute => dashboardRoute.title === "SETTINGS");

function App() {
  return (
    <Provider store={store}>
      <div className="app-cover-flex">
        <div className="app-cover-item">
          <Router>
            <Routes>
              {
                ROUTES.map((route, index) => (
                  <Route path={route.url} element={<route.component />} />
                ))
              }
            </Routes>
            <Routes>
              {
                customer?.routes.map((route, index) => (
                  <Route path={route.url} element={<route.component />} />
                ))
              }
            </Routes>
            <Routes>
              {
                business?.routes.map((route, index) => (
                  <Route path={route.url} element={<route.component />} />
                ))
              }
            </Routes>
            <Routes>
              {
                setting?.routes.map((route, index) => (
                  <Route path={route.url} element={<route.component />} />
                ))
              }
            </Routes>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
