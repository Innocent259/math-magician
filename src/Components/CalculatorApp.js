import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

export default function CalculatorApp() {
  return (
    <>
      <nav className="nav">
        <h1>Math Magician</h1>
        <ul className="links-list">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link className="link" to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}
