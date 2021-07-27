
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {  
  return (
     //if we write class here not a classname then it will show error
     //and this is not html .
     //this is jsx-javascript xml language .   
  
  <div className="App"> 
     {/* This is header injection */}
      <Header/>
          <h1>This is a React app.</h1> 
          <p>This is a APp Component</p>
    {/* This is footer injection */}
      <Footer/>
             </div> 
              );
            }
 
 export default App
