import React, { Suspense } from 'react';
import { RouteObject } from 'react-router';
import { AppLayout } from './components';
import { getStoreTransferModuleRoutes } from './module-store-transfer/app-routes-store-transfer';
import Login from './module-main/pages/login';
import Register from './module-main/pages/register';
import Home from './module-main/pages/home';
import ManualUpload from './module-store-transfer/pages/manual-upload';
import Forgot_password from './module-main/pages/fogotpass';

// to show loading state for desired page only instead of the entire screen
const lazyLoad = (children: React.ReactNode) => {
  return (
    <Suspense
      fallback={
        <div className="d-flex vh-100">
          Loading...
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export const initRoutes = (): RouteObject[] => {

  let routes: RouteObject[] = [];
  const token = localStorage.getItem('token')

  
  routes.push({ path: '/login', element: lazyLoad(<Login />) });
  routes.push({ path: '/register', element: lazyLoad(<Register />) });
  routes.push({ path: '/forgot_password', element: lazyLoad(<Forgot_password />) });


  return [
    ...routes,
    // authenticated pages
    
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: lazyLoad(<ManualUpload />),
        },
        ...getStoreTransferModuleRoutes()
      ],
    },
    {
      path: '/ist',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: lazyLoad(<Home />),
        },
        ...getStoreTransferModuleRoutes()
      ],
    },
  ];
};
