
import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Image from './Component/image';
import Welcome from './welcom';
import Myform from './Component/Myform';
import Employee from './Component/Employee';


function App() {  
  return (
     //if we write class here not a classname then it will show error
     //and this is not html .
     //this is jsx-javascript xml language .   
  
  <div className="App"> 
     {/* This is header injection */}
      <Header />

      <Welcome name="Tanmay" phone="007"> </Welcome>

      <h1>This is a React app.</h1>  
     <Image/>  
     <h1  className="display-1 text-primary">App Component</h1>  
      <p>This is a APp Component</p>
     
      <Myform/>
      <Employee/>

      <Footer/>
             </div> 
              );
            }
 
 export default App
