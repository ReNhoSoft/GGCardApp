import TechContainer from './tableLayout/techContainer/TechContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPageLayout from './pages/MainPageLayout.jsx';
import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import TechItemFormPage from './pages/TechItemFormPage.jsx';
import { getToken } from './helpers/authenticationHelper.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout />,
    loader: getToken,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/create", element: <TechItemFormPage /> },
    ],
  },
]);

function App() {

  return (
     <RouterProvider router={router}/>
  )
}

export default App
