import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>My Web Site</header>
      </div>
    )
  }
}

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
        }}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/invoices">Invoices</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
          </ul>
        </nav>
      </>
    )
  }
}

function Expenses() {
  return (
    <main style={{ padding: "1rem 0"}}>
      <h2>Expenses</h2>
    </main>
  )
}

class Base extends React.Component {
  render() {
    return (
        <>
          <h1>Base</h1>
        </>
      );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
          <>
          <BrowserRouter>
            <Header />
            <Nav></Nav>
            <Routes>
              <Route path="/" element={<Base />}/>
              <Route path="/expenses" element={<Expenses />} />
            </Routes>
          </BrowserRouter>
        </>
);