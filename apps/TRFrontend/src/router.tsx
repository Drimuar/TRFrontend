import { createBrowserRouter } from 'react-router-dom';
import App from './app/app';
import MainPage from './pages/mainPage/mainPage';
import CatalogPage from './pages/catalogPage/catalogPage';
import ProductPage from './pages/productPage/productPage';

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
      {
        path: "product",
        element: <ProductPage />
      },
    ],
  }
]);
