import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY } from '../../../helpers/constants';
import { loginRedirect } from '../../../helpers/utils';

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

  const { children, loadingComponent: Loading } = props;
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