import styled from "styled-components"
import * as globalStyles from "../../../styles/global"

export const SCHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 48px;

  /* align-items: center; */
`

export const SCHeaderBoxIst = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${globalStyles.white};
  margin-bottom: 40px;
  padding: 18px;
  border-radius: 0px 0px 0px 12px;
`

export const SCHeaderText = styled.p`
  font-size: 3.6rem;
  font-weight: 500;
  color: ${globalStyles.black};
`

export const SCHeaderContent = styled.div`
  display: flex;
  align-items: center;
`

export const SCHeaderWelcome = styled.p`
  font-size: 2rem;
  color: ${globalStyles.black};

`

export const SCHeaderName = styled.span`
  font-weight: 500;
  font-size: 2rem;
`

export const SCHeaderSubTextIst = styled.span`
  color: #B4B4B4;
  font-size: 2rem;
`

export const SCExportAllBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SCExportAllBoxButton = styled.button`
  background-color: ${globalStyles.white};
  border: 1px solid #11B221;
  border-radius: 6px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
`
export const SCExportAllBoxSpan = styled.span`
  color: #11B221;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 0 10px;
`

export const SCHeaderButtonIst = styled.span`
  background: linear-gradient(180deg, #BC3D81 0%, #820F4C 100%);
  border-radius: 6px;
  font-size: 2rem;
  font-weight: 500;
  padding: 10px 40px;
  color: ${globalStyles.white};
  margin-right: 30px;
`

