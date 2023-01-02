import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar, Footer, Alert } from './components/layout';

import { Landing } from './components/pages';
import PageRoutes from './components/routing/PageRoutes';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className='app'>
        <Router>
          <Navbar />
          <div className='content'>
            <Alert />
            <Routes>
              <Route exact path='/' element={<Landing />} />
              <Route path='/*' element={<PageRoutes />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
