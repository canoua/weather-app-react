import React from 'react';
import Header from './pages/Main/components/Header/Header';
import Content from './pages/Main/components/Content/Content';
import Footer from './pages/Main/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
       <Header/>
       <Content/>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
