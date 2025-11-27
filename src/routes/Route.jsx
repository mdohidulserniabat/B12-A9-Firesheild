import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Services from '../pages/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/services',
        Component: Services,
      },
    ],
  },
]);
export default router;
