import { createBrowserRouter } from 'react-router-dom';
import App from './app/app';
import MainPage from './pages/mainPage/mainPage';
import CatalogPage from './pages/catalogPage/catalogPage';
import ProductPage from './pages/productPage/productPage';
import { ROUTES } from './utils/constants';
import UserPage from './pages/userPage/userPage';
import CartPage from './pages/cartPage/cartPage';

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: ROUTES.CATALOG,
        element: <CatalogPage />
      },
      {
        path: ROUTES.PRODUCT,
        element: <ProductPage />
      },
      {
        path: ROUTES.CART,
        element: <CartPage />
      },
      {
        path: ROUTES.USER,
        element: <UserPage />
      },
      {
        path: ROUTES.PURCHASES,
        element: <div>Покупки</div>
      },
      {
        path: ROUTES.FAVORITES,
        element: <div>Избранное</div>
      },
    ],
  }
]);
