import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux'
import {store, persistor} from './store/store'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { PersistGate } from 'redux-persist/integration/react';
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: '20px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const notistackRef = React.createRef();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} >

    <BrowserRouter>
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
    </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

