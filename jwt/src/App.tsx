import LoginPage from './pages/loginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';


function App() {
 const router = createBrowserRouter ([
  {
    path: "/",
    element: <LoginPage /> ,
  },
  {
    path: "/RegisterPage",
    element: <RegisterPage />,
  }
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
