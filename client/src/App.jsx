import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

function App(){
  return{
    render(){
      return(
        <div>
          <Navbar />
          <Home />
        </div>
      );
    }
  }
}

export default App;