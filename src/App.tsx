import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Routes as ROUTES } from "./routes";
import './scss/app.scss';

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
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
