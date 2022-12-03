import About from '../components/About';
import Home from '../components/Home';
import { Navigate } from 'react-router-dom';


const routes = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/',
    element: <Navigate to="/home" />
  },
]

export default routes
