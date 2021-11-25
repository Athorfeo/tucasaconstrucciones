import { Outlet, Link } from "react-router-dom";

import './App.css';

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
