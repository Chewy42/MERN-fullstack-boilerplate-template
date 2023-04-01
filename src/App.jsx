import './App.css';
import {
  BrowserRouter as Router,
  //Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Homepage from './Components/Homepage';

function App() {

  // FOR AUTHENTICATION AND PUBLIC/PRIVATE ROUTES
  // const { isAuthenticated } = useContext(AuthContext);

  // const PublicRoute = ({ element }) => {
  //   return !isAuthenticated ? element : <Navigate to="/dashboard" replace />;
  // };

  // const PrivateRoute = ({ element }) => {
  //   return isAuthenticated ? element : <Navigate to="/signin" replace />;
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
