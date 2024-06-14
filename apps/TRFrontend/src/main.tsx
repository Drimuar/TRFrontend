import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { router } from './router';

import { store } from './store/store';

createRoot(
  document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      {/* <StrictMode> */}
      <RouterProvider router={router} />
      {/* </StrictMode> */}
    </Provider>
  );

