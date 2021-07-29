import React from 'react';
import './App.css';
// import Header from './Component/Header';
// import Footer from './Component/Footer';
import Routes from './Component/Routes';
 
// create other components and import them here. 
// import Footer2 from './components/Footer2';
// import CgAppBar from './components/CgAppBar';

// create other components and import them here. 
// npm i --save @material-ui/core 
// npm i --save @material-ui/icons 

let handleCallback = (childData) => {
  this.setState({ name: childData })
}

const App = () => {
  return (
    <div>
      <Routes/>
    </div>
  );
}
export default App;