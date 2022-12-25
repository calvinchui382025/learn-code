import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Weather from './features/Weather/Weather';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
//======================================================
const container = document.getElementById('root')!;
const root = createRoot(container);
//======================================================
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Weather',
    element: <Weather />,
  },
  {
    path: '/Test',
    element: <div>TEST PAGE</div>
  }
])
//======================================================
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <div id="outer-container">
        <BurgerMenu 
          pageWrapId={ "page-wrap" } 
          outerContainerId={'outer-container'}
          width={ '20%' }
          // isOpen={ false }
          // onOpen={() => {console.log('opened')}}
        >
          <a id="home" href="/">Home</a>
          <a id="weather" href="/Weather">Weather</a>
          <a id="test" href="/Test">Test</a>
        </BurgerMenu>
        <div id='page-wrap'>
          <RouterProvider router={router}/>
        </div>
      </div>
    </Provider>
  </React.StrictMode>
);
//======================================================
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
