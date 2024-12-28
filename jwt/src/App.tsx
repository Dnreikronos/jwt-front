import LoginPage from './pages/LoginPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import SignOut from './pages/SignoutPage';



const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem("authToken");

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return element;
};


function App() {
 const router = createBrowserRouter ([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/RegisterPage",
    element: <RegisterPage />,
  },
  {
    path: "/Signout",
    element: <PrivateRoute element={<SignOut />} />,
  }
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
