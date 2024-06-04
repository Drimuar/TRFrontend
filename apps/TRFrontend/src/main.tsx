import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './app/app';
import MainPage from './pages/mainPage/mainPage';
import CatalogPage from './pages/catalogPage/catalogPage';

const router = createBrowserRouter([
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



createRoot(
  document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );

