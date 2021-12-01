import { Outlet } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
