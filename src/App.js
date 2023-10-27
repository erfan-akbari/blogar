import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'react-router-dom';
import routesData from "./routes.js"
import { AppProvider } from './Contexts/ContextApi.js';

import 'reset-css';
import './Styles/App.css';

function App() {
  const routes = useRoutes(routesData)

  return (
    <AppProvider>
      {routes}
    </AppProvider>
  );
}

export default App;
