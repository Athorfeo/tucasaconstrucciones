import { Outlet } from "react-router-dom";
import './i18n'
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebaseConfig } from '../res/data/FirebaseConfig';

// Initialize Firebase
const app = initializeApp(getFirebaseConfig());
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
