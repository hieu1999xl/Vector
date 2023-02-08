import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY } from '../../../helpers/constants';
import { loginRedirect } from '../../../helpers/utils';
import { MainService } from '../../../module-main/services/api';

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

  const [userData, setUserData] = useState();

  const { children, loadingComponent: Loading } = props;
  useEffect(() => {
    MainService.getProfile().then(res => {
      setUserData(res.data)
    })
  }, [])

  console.log('userData', userData);

  if (localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD)) {
    return <>{ children }</>
  } else {
    loginRedirect()
  }
  return null
}

const UnauthenticatedTemplate = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};