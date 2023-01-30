import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';

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
  return <></>
}

const UnauthenticatedTemplate = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};