import styled from "styled-components"
import * as globalStyles from "../../../styles/global"
import * as GridSystem from "../../../styles/gridSystem"


export const SCManualBoxCenter = styled.div`
 @media (min-width: ${GridSystem.size.laptopL}) {
        margin-top: 100px;
      }

`

export const SCManualBox = styled.div`
  width: 100%;
  background-color: ${globalStyles.white};
  border: 1px solid #D6D6D6;
  border-radius: 6px;
  padding: 82px 0 68px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SCManualText = styled.p`
  font-size: 3.6rem;
  text-align: center;
  color: ${globalStyles.black};
  font-weight: 500;

`

export const SCManualDrag = styled.div`
  box-shadow: 5px 5px 30px #6E6B6B29;
  padding-top: 38px;
  border-radius: 6px;
  margin-top: 62px;
  margin-bottom: 60px;
  width: 100%;
  max-width: 778px;

`

export const SCManualDragText = styled.p`
  font-size: 2.5rem;
  text-align: center;
  color: ${globalStyles.black};
  font-weight: 500;
  padding-bottom: 28px;
`

export const SCManualDowload = styled.div`
  display: flex;
  justify-content: center;
`

export const SCManualDowloadText = styled.p`
  font-size: 1.8rem;
  padding-bottom: 70px;
`

export const SCManualUpload = styled.div`
  display: flex;
  align-items: center;
`

export const SCManualUploadButton = styled.button`
  box-shadow: 2px 2px 15px #A2A0A029;
  border-radius: 0px 0px 0px 6px;
  width: 162px;
  height: 63px;
  color: ${globalStyles.white};
  background-color: ${globalStyles.black};
`

export const SCManualUploadText = styled.p`
  color: #C8C5C5;
  font-size: 1.8rem;
  padding-left: 30px;
`

export const SCManualUploadBtn = styled.button`
  background: transparent linear-gradient(180deg, #BC3D81 0%, #820F4C 100%);
  border-radius: 6px;
  font-size: 2.2rem;
  color: ${globalStyles.white};
  padding: 10px 40px;
  border: none;
`