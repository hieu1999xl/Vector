import React, { useContext } from 'react';
import { User } from '../module-main/types';

export type Permission = {
  canView: boolean;
  canCreate: boolean;
  canModify: boolean;
  canDelete: boolean;
  featurePermission: {
    viewAll: boolean;
    create: boolean;
    modifyAll: boolean;
    deleteAll: boolean;
  };
};

export type UserData = {
  user: User
};

export const UserDataContext = React.createContext<UserData>({
  user: {
    id: 0,
    email: '',
    name: '',
    is_admin: false,
    role: ''
  },
});

UserDataContext.displayName = 'UserDataContext';

export const useUserData = () => useContext(UserDataContext);
