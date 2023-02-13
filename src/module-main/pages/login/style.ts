import styled from "styled-components"

export const SCButtonLogin = styled.button`
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 10px 0;
  transition: background 0.3s;
  background: #f0f1f4;
  box-shadow: -6px -6px 30px #bbb7b7;
  border-radius: 40px;
  width: 324px;
  height: 65px;
  color: #575F6B;
  margin-bottom: 30px;
  &:hover {
    background: #460224;
    color: #FFFFFF;
    position: relative;
    transition: all 0.5s;
  }
  `
export const App: any = styled.div`
                // background: #f7fafc;
                // border-radius: 4px;
                // box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
                max-width: 615px;
                // padding-bottom: 66px;
                margin-top: 80px;
                text-align: center;
                border-left: 1px solid #c9c1c1;
                width: 90%;
            `;
export const Tittle: any = styled.h1`
    font: normal normal medium 30px/39px Roboto;
    letter-spacing: 0px;
    padding-bottom: 50px;
    color: #575F6B;
    height: 39px;
  `
export const IputLogin: any = styled.input<{ error: true | false }>`
    border: ${props => (props.error ? '2px solid red' : 'none')};
    text-indent: 70px;
    width: 513px;
    height: 70px;
    background: #f0f1f4;
    box-shadow: -4px -4px 20px #bbb7b7;
    border-radius: 40px;
    overflow: hidden;
    
  `
export const AuthenForm: any = styled.div`
  background: '#ececf1',
  height: '100vh'
`
export const Regrister: any = styled.div`
  padding: 0px 0px 10px;
`
export const ChangePassText: any = styled.div`
  padding-top: 5px;
`
export const KeepSingIn: any = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 45px;
  margin-top: 45px;
`

