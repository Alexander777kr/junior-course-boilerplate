import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/main';

const App = () => {


  return (
    <div className="app">
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
