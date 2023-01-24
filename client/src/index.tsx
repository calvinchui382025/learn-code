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
  Routes,
} from 'react-router-dom';
// import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './features/Home/Home';
import Weather from './features/Weather/Weather';
import { StyledBurgerMenu, StyledLink, WhiteDivider } from './styled-components/styles';
import { KeyBored } from './features/Keyboard/Keyboard';
//======================================================
const container = document.getElementById('root')!;
const root = createRoot(container);
//======================================================
root.render(
  <React.StrictMode>
    <Provider store={store} >

      <BrowserRouter>

        <div id="outer-container">

          <StyledBurgerMenu 
            pageWrapId={ "page-wrap" } 
            outerContainerId={'outer-container'}
            width={ '20%' }
            style={{ 
              overflow: 'none',
            }}
          >
            <StyledLink to={'/'} >Home</StyledLink>
            <WhiteDivider />
            <StyledLink to={'/Weather'} >Weather</StyledLink>
            <WhiteDivider />
            <StyledLink to={'/Keyboard'} >Keyboard</StyledLink>
            <WhiteDivider />
          </StyledBurgerMenu>

          <div id='page-wrap'>
            <Routes>
              <Route path='/' element={ <Home /> }/>
              <Route path='/Weather' element={ <Weather /> }/>
              <Route path='/Keyboard' element={ <KeyBored /> } />
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
