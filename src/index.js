import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import Game from './Components/Game';
import Todo from './Components/Todo';
import Footer from './Components/Footer';

import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';

function Base(props) {
  return (
    <div className='base'>
      { props.ajsx }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
          <>
          <Header />
          <Base ajsx={
          <BrowserRouter>
            <SideBar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Game" element={<Game />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </BrowserRouter>}
          />
          <Footer />
        </>
);