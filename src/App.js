import React from 'react';
import './App.css';

import Sidebar from './components/sideBar/sidebar.component';
import Mainbar from './components/mainBar/mainbar.component';
function App() {
  return (
    <div className="App">
     <Sidebar />
     <Mainbar />
    </div>
  );
}

export default App;
