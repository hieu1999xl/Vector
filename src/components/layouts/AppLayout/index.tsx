import { Outlet } from 'react-router';
import { Header, Navbar } from '../../index';
import { useEffect } from 'react';
import { AuthenticationTemplate } from './AuthenticationTemplate'
import * as GridSystem from "../../../styles/gridSystem";



const isAnonymous = false;

const AppLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthenticationTemplate loadingComponent={<>Loading...</>} isAnonymous={isAnonymous}>
      <GridSystem.SCGrid>
        <GridSystem.SCRow>
          <GridSystem.SCCol_3>
            <Navbar />
          </GridSystem.SCCol_3>
          <GridSystem.SCCol_8>
            <Header />
            <Outlet />
          </GridSystem.SCCol_8>
        </GridSystem.SCRow>
      </GridSystem.SCGrid>
    </AuthenticationTemplate>
  );
};

export default AppLayout;
