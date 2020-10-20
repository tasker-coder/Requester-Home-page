import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Slidebar from './components/slidebar';
import Requester from './components/requester';
import Footer from './components/footer';
import './components/css/navbar.css'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Slidebar />
    <Requester />
    <Footer />
    </div>
  );
}

export default App;
