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

  return (
    <HeaderStyled.SCHeaderBox >
      <HeaderStyled.SCHeaderText>{renderNamePage()}</HeaderStyled.SCHeaderText>
      <HeaderStyled.SCHeaderContent>
        <HeaderStyled.SCHeaderWelcome>
          Welcome Back! <HeaderStyled.SCHeaderName>{ user.name }</HeaderStyled.SCHeaderName>
        </HeaderStyled.SCHeaderWelcome>
        <img src="../assets/img/header/notifications.svg" style={{ padding: "0 20px" }} />
        <img src="../assets/img/header/profile.svg" />
      </HeaderStyled.SCHeaderContent>
    </HeaderStyled.SCHeaderBox>
  );
};

export default Header;
