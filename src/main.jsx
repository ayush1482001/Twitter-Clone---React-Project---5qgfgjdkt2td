import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-om642n8fzgoy5t0a.us.auth0.com"
    clientId="7bRxqqTWraBSY46x8teQhCkTOb7Z4XWI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ChakraProvider>
    <App />
    </ChakraProvider>
    
  </Auth0Provider>,
);
 

