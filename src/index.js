import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './features/store';
import App from './App';
import { extendedApiSlice } from './features/posts/postsSlice';

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
