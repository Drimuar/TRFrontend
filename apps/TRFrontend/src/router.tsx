import { createBrowserRouter } from 'react-router-dom';
import App from './app/app';
import MainPage from './pages/mainPage/mainPage';
import CatalogPage from './pages/catalogPage/catalogPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: "catalog/:catalogId",
        element: <CatalogPage />
      },
    ],
  }
]);
