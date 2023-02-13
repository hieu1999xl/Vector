import styled from 'styled-components';

const LoginHead = () => {
  return (
      <BgHead>
        <LogoHead>
          <img src="../assets/img/logoWhite.png" alt="" width="410px" height="118px"/>
          <TextHead>
            Welcome to a seamless, end to end supply chain management system
          </TextHead>
          <img src="../assets/img/arrow.png" alt="" style={{position : 'absolute', right: '50px', bottom: '-50px'}}/>
          <img src="../assets/img/arrow2.png" alt="" style={{position : 'absolute', left: '-55px', bottom: '-400px'}}/>
        </LogoHead>
      </BgHead>
  
  );
};
export default LoginHead;

const BgHead = styled.div`
  // background : transparent url('../assets/img/bgHead.png') 0% 0% no-repeat padding-box;
  background: #2B2B2B;
  height : 273px
`;
const LogoHead = styled.div`
  position : relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 43px ;
  flex-direction: column;
`
const TextHead = styled.h2`
  padding-top: 33px;
  color : white;
  font : normal normal 300 22px/29px Roboto;
  letter-spacing: 0px;
  margin: 0px;
`