import LoginPage from './pages/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import SignOut from './pages/SignoutPage';

function App() {
 const router = createBrowserRouter ([
  {
    path: "/",
    element: <LoginPage /> ,
  },
  {
    path: "/RegisterPage",
    element: <RegisterPage />,
  },
  {
    path: "/Signout",
    element: <SignOut />
  }
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
