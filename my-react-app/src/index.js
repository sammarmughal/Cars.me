import React from 'react';
// import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
const root = createRoot(document.getElementById('root'));

root.render(
    <App />
/* <Auth0Provider
    domain="dev-d4slkuyz80fwrnic.us.auth0.com"
    clientId="w3enhSjYoyHBGrwIBE3CXnTdBBGYl7ZI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > 
   
  </Auth0Provider>,*/
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
