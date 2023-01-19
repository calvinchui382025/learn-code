import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  // createBrowserRouter,
  BrowserRouter,
  Route,
  // RouterProvider,
  Link,
  Routes,
} from 'react-router-dom';
// import ErrorPage from './components/ErrorPage/ErrorPage';
import Weather from './features/Weather/Weather';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
//======================================================
const container = document.getElementById('root')!;
const root = createRoot(container);
//======================================================
root.render(
  <React.StrictMode>
    <Provider store={store} >

      <BrowserRouter>
        <div id="outer-container">
          <BurgerMenu 
            pageWrapId={ "page-wrap" } 
            outerContainerId={'outer-container'}
            width={ '20%' }
          >
            <Link to={'/'} >Weather</Link>
            <Link to={'/Weather'} >Weather</Link>
            <Link to={'/Test'} >Test</Link>
          </BurgerMenu>
          <div id='page-wrap'>
            <Routes>
              <Route path='/Weather' element={ <Weather /> }/>
              <Route path='/Test' element={  <div style={{height: '100vh'}}>TEST PAGE</div> }/>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
        
    </Provider>
  </React.StrictMode>
);
//======================================================
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
