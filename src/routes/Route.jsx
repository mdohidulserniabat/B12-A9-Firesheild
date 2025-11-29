import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Services from '../pages/Services';
import Profile from '../pages/Profile';
import Details from '../pages/Details';
import Privateroute from '../provider/Privateroute';
import Passwordrest from '../pages/Passwordrest';

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
        path: '/rest-password',
        Component: Passwordrest,
      },
      {
        path: '/services',
        Component: Services,
      },
      {
        path: 'profile',
        Component: Profile,
      },
      {
        path: '/service/details/:id',
        element: (
          <Privateroute>
            <Details></Details>
          </Privateroute>
        ),
        loader: () => fetch('/services.json'),
      },
    ],
  },
]);
export default router;
