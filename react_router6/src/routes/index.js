import About from '../components/About';
import Home from '../components/Home';
import News from '../components/News';
import Message from '../components/Message';
import Deatil from '../components/Detail';
import { Navigate } from 'react-router-dom';


const routes = [
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            path: 'detail/:id/:title/:value',
            element: <Deatil />
          }
        ]
      },

    ]
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
