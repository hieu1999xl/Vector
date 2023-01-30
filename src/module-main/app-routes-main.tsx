import React from 'react';
import { RouteObject } from 'react-router';
import { LazyLoad } from '../components';
import { ROUTES } from './constants';

const Profile = React.lazy(() => import('./pages/profile'));

export const getMainModuleRoutes = (): RouteObject[] => {
  return [
    {
      children: [
        {
          index: true,
          element: LazyLoad(<Profile />),
        }
      ],
    },
  ];
};
