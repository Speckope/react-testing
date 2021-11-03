import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import RootComponent from './RootComponent';

ReactDOM.render(
  <React.StrictMode>
    <RootComponent>
      <App />
    </RootComponent>
  </React.StrictMode>,
  document.getElementById('root')
);
