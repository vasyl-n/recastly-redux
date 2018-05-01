import  React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import {Provider} from 'react-redux';
import setupStore from './reducers/store.js'



document.addEventListener("DOMContentLoaded", function(event) {
  const store = setupStore();
  window.store = store;
  ReactDOM.render(
    
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById('app')
  );
});

