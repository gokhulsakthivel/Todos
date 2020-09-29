import React from 'react';
import Sidebar from './Components/sidebar/Sidebar'
import Details from './Components/details/Details'
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      
      {/* sideBar */}
      <Details/>
      {/* details */}

    </div>
  );
}

export default App;
