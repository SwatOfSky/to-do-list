import React from 'react';
import Header from "./components/header";
import Tasks from "./components/tasks";
import Clear from "./components/clear";
import "./App.css"

function App() {
  return (
      <div className='App'>
      <Header />
      <Tasks />
      <Clear />
      </div>
  );
}

export default App;
