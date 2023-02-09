import React, { PropsWithChildren, useEffect, useState } from 'react';
import { loginRedirect } from '../../../helpers/utils';
import { MainService } from '../../../module-main/services/api';
import { useNavigate } from 'react-router';
import { UserDataContext } from '../../../context';

interface AuthenticationTemplateProps {
  isAnonymous: boolean;
  loadingComponent: React.ReactElement;
}


export const AuthenticationTemplate = ({
  isAnonymous,
  loadingComponent,
  children,
}: PropsWithChildren<AuthenticationTemplateProps>) => {

  if (isAnonymous) {
    return <UnauthenticatedTemplate>{children}</UnauthenticatedTemplate>;
  } else {
    return <AuthenticatedTemplate loadingComponent={loadingComponent}>{children}</AuthenticatedTemplate>;
  }
};

const AuthenticatedTemplate = (props: PropsWithChildren<Pick<AuthenticationTemplateProps, 'loadingComponent'>>) => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();

  const { children, loadingComponent: Loading } = props;
  useEffect(() => {
    MainService.getProfile().then(res => {
      setUserData(res.data)
      setLoading(false)
    }).catch(() => {
      loginRedirect(navigate);
      setLoading(false)
    })
  }, [])

  if (loading) {
    return Loading;
  }

  if (userData) {
    return (
      <UserDataContext.Provider value={{user: userData}} >
        {children}
      </UserDataContext.Provider>
    )
  }

  return null
}

const UnauthenticatedTemplate = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};