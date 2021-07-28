import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Routes from './Component/Routes';
 
// create other components and import them here. 
 
function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="display-1 text-primary">App Component</h1>
      <Routes />
      <Footer />
    </div>
  );
}
export default App;
