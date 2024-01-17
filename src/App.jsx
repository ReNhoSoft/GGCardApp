import TechContainer from './tableLayout/techContainer/TechContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPageLayout from './pages/MainPageLayout.jsx';
import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import TechItemFormPage from './pages/TechItemFormPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout />,
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
