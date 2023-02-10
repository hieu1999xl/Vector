import { useUserData } from '../../../context';
import * as HeaderStyled from './style';
const Header = () => {

  const { user } = useUserData()

  const renderNamePage = () => {
    if (location.pathname === "/") {
      return (<span>Manual Upload</span>)
    } else if (location.pathname === "/ist") {
      return (<span>Pending IST Requests</span>)
    } else if (location.pathname === "/ist-forced") {
      return (<span>IST Forced Closure</span>)
    } else if (location.pathname === "/store-status") {
      return (<span>Store Status</span>)
    }
  }

  const renderHeader = () => {
    if (location.pathname === "/is-status") {
      return (
        <HeaderStyled.SCHeaderBoxIst >
          <HeaderStyled.SCHeaderText>IST Status <HeaderStyled.SCHeaderSubTextIst>(Create Your Own Report)</HeaderStyled.SCHeaderSubTextIst> </HeaderStyled.SCHeaderText>
          <HeaderStyled.SCHeaderContent>
            <HeaderStyled.SCHeaderButtonIst>Edit</HeaderStyled.SCHeaderButtonIst>
            <HeaderStyled.SCExportAllBox><HeaderStyled.SCExportAllBoxButton><img src="../assets/img/forced/excel.png" alt="and" /><HeaderStyled.SCExportAllBoxSpan>EXPORT ALL</HeaderStyled.SCExportAllBoxSpan><img src="../assets/img/forced/export.svg" alt="and" /></HeaderStyled.SCExportAllBoxButton></HeaderStyled.SCExportAllBox>
          </HeaderStyled.SCHeaderContent>
        </HeaderStyled.SCHeaderBoxIst>
      )
    } else {
      return (
        <HeaderStyled.SCHeaderBox >
          <HeaderStyled.SCHeaderText>{renderNamePage()}</HeaderStyled.SCHeaderText>
          <HeaderStyled.SCHeaderContent>
            <HeaderStyled.SCHeaderWelcome>
              Welcome Back! <HeaderStyled.SCHeaderName>{user.name}</HeaderStyled.SCHeaderName>
            </HeaderStyled.SCHeaderWelcome>
            <img src="../assets/img/header/notifications.svg" style={{ padding: "0 20px" }} />
            <img style={{ cursor: 'pointer' }} src="../assets/img/header/profile.svg" />
          </HeaderStyled.SCHeaderContent>
        </HeaderStyled.SCHeaderBox>
      )
    }
  }

  return (
    <>{renderHeader()}</>
  );
};

export default Header;
