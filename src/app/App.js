import { Outlet, Link } from "react-router-dom";

import './App.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Navigation from '../component/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
