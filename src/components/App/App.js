import React from 'react';
import './css/App.css';
import Header from './../Header/Header';
import Main from './../Main/Main';
import Footer from './../Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
       <Header/>
       <Main/>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
