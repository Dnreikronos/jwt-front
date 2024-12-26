import LoginPage from './pages/loginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
 const router = createBrowserRouter ([
  {
    path: "/",
    element: <LoginPage /> ,
  }
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
