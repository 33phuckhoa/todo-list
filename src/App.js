import './App.css';
import { useState } from 'react'
import Search from './components/Search';
import Brand from './components/Brand';

function App() {

  return (
    <div className="App">
      <Brand/>
      <Search/>
    </div>
  );
}

export default App;
