import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './view/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import RootReducers from './store/reducers/RootReducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = createStore(RootReducers, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
