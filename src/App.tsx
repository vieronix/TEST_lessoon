import React from 'react';
import './App.css';
import HelloWorld from "./companents/Hello_World";
import Name from "./companents/Name";


function App() {
    return (


        <div className="App">
            <header className="App-header">
                <HelloWorld></HelloWorld>
                <Name></Name>
                
                <a className="App-link"
                    target="_blank"
                    rel="noopener noreferrer">

                </a>
            </header>
        </div>
    );

}

export default App;
