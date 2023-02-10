import React, { Suspense } from 'react';
import { RouteObject } from 'react-router';
import { AppLayout } from './components';
import { getStoreTransferModuleRoutes } from './module-store-transfer/app-routes-store-transfer';
import Login from './module-main/pages/login';
import Register from './module-main/pages/register';
import Home from './module-main/pages/home';
import ManualUpload from './module-store-transfer/pages/manual-upload';
import IstForced from './module-store-transfer/pages/ist-forced';
import StoreStatus from './module-store-transfer/pages/store-status';
import ForgotPassword from './module-main/pages/forgot-password';
import Availability from './module-store-transfer/pages/availability-comparison';
import IstStatus from './module-store-transfer/pages/ist-status-demo/index_main';

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

  routes.push({ path: '/register', element: lazyLoad(<Register />) });
  routes.push({ path: '/login', element: lazyLoad(<Login />) });
  routes.push({ path: '/forgot-password', element: lazyLoad(<ForgotPassword />) });

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
    {
      path: '/ist-forced',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: lazyLoad(<IstForced />),
        },
        ...getStoreTransferModuleRoutes()
      ],
    }, {
      path: '/store-status',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: lazyLoad(<StoreStatus />),
        },
        ...getStoreTransferModuleRoutes()
      ],
    },
    {
      path: '/availability-comparison',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: lazyLoad(<Availability />),
        },
        ...getStoreTransferModuleRoutes()
      ],
    },
    {
      path: '/is-status',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: lazyLoad(<IstStatus />),
        },
        ...getStoreTransferModuleRoutes()
      ],
    },
  ];
};
