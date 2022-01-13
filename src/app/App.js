import { Outlet } from "react-router-dom";
import './i18n'
import './App.css';

import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {t('hello_world')}
      <Outlet />
    </div>
  );
}

export default App;
