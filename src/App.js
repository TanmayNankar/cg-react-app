
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Image from './image';
import Welcome from './welcom';
import Myform from './Myform';
import Employee from './Employee';

function App() {  
  return (
     //if we write class here not a classname then it will show error
     //and this is not html .
     //this is jsx-javascript xml language .   
  
  <div className="App"> 
     {/* This is header injection */}
      <Header/>

      <Welcome name="Tanmay" phone="007"> </Welcome>
      
      <h1>This is a React app.</h1>  
        
      <Image/>  
        
      <p>This is a APp Component</p>

    {/* This is footer injection */}
      <Footer/>
      <Myform/>
      <Employee/>
             </div> 
              );
            }
 
 export default App
