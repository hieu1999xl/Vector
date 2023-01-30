import React from 'react';
import { RouteObject } from 'react-router';
import { LazyLoad } from '../components';
import { ROUTES } from './constants';

const ManualUpload = React.lazy(() => import('./pages/manual-upload/index'));

export const getStoreTransferModuleRoutes = (): RouteObject[] => {
  return [
    {
      children: [
        {
          index: true,
          element: LazyLoad(<ManualUpload />),
        },
      ],
    },
  ];
};
