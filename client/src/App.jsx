import React from "react";
import Navbar from "./Components/Navbar/Navbar";

function App(){
  return{
    render(){
      return(
        <div>
          <Navbar />
          <h1>Questify</h1>
          <p>Welcome to Questify!</p>
        </div>
      );
    }
  }
}

export default App;