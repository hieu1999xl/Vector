import * as HeaderStyled from './style';
const Header = () => {

  return (
    <HeaderStyled.SCHeaderBox >
      <HeaderStyled.SCHeaderText>Manual Upload</HeaderStyled.SCHeaderText>
      <HeaderStyled.SCHeaderContent>
        <HeaderStyled.SCHeaderWelcome>
          Welcome Back! <HeaderStyled.SCHeaderName>Nikhil Shah</HeaderStyled.SCHeaderName>
        </HeaderStyled.SCHeaderWelcome>
      </HeaderStyled.SCHeaderContent>
    </HeaderStyled.SCHeaderBox>
  );
};

export default Header;
