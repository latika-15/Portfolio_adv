import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App(){

    return(
        <div className="App">
        <Header/>
        <Skills/>
        <Projects/>
        <About/>
    
        </div>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App/>);