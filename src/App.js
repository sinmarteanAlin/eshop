import React, { Component } from 'react';
import './App.css';
import Header from './containers/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Router from './Router';
import Footer from './components/footer/Footer';

class App extends Component {
    render() { 
        return (
            <div className="App">
                <Header />
                <Router />
                <Footer />
            </div>
        );
    }
}

export default App;
