import React from 'react';
// import { hot } from 'react-hot-loader';
import './App.css';
import Search from './search';
import initialDetails from './STATIC_DATA.json';

const App = () => {
   return (
      <div className="tc bg-green ma0 pa4 min-vh-100">
         <Search details={initialDetails} />
      </div>
   );
};

// export default hot(module)(App);
export default App;
