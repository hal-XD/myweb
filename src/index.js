import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import { BrowserRouter,Link,Routes,Route,Outlet } from 'react-router-dom';

import Testpage2 from "./tmp/invoice";
import Test3 from "./tmp/test3";

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
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
          </nav>
          <Outlet />
        </>
      );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// Routerの複数レンダリングを防ぐために一番上で一度だけ
root.render(
          <>
          <BrowserRouter>
            <Header />
            <Nav></Nav>
            <Routes>
              <Route path="/" element={<Base />}/>
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/invoices" element={<Testpage2 />} >
                <Route 
                  index
                  element={
                    <main styple={{ padding: "1rem"}}>
                      <p>Select an invoice</p>
                    </main>
                  }
                >
                </Route>
                <Route path=":id" element={<Test3 />}></Route>
              </Route>
              <Route 
                path="/invoices/*" 
                element={
                  <main style={{ padding:"1rem"}}>
                    <p>404:Not Found.There's noone here.</p>
                  </main>
                }
              >
              </Route>
              <Route 
                path="*" 
                element={
                  <main style={{ padding:"1rem"}}>
                    <p>404:Not Found.There's nothing here.</p>
                  </main>
                }
              >
              </Route>
            </Routes>
          </BrowserRouter>
        </>
);