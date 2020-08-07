import React from 'react';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Header from './components/heade/Heade';
import {Route} from 'react-router-dom';



function App() {
    return(
            <div className="App">
                <Header />
                <div className="content">
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                </div>
            </div>
    )
}

export default App;