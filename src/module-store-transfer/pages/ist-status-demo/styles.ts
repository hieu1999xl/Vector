import styled from "styled-components";
import * as globalStyles from "../../../styles/global"
import * as GridSystem from "../../../styles/gridSystem"

export const SCIstStatusRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const SCIstStatusText = styled.p`
  font-size: 1.2rem;
  color: #B4B4B4;
  padding-bottom: 10px;
`

export const SCIstStatusFIlterBox = styled.div`
  padding: 30px 15px;
  background-color: ${globalStyles.white};
`

export const SCIstComponent = styled.div`
  background-color: #B4B4B4;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: ${globalStyles.white};
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 ;
`

export const SCIstStatusSettingPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`

export const SCIstStatusAddButton = styled.button`
    background-color: ${globalStyles.white};
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: underline;
`

export const SCIstStatusInput = styled.input`
  display: none;
`

export const SCIstStatusLabel = styled.label`
  display: inline-flex;
  margin: 4px 0;
  position: relative;
  border-radius: 2px;
  width: 40px;
  font-size: 1.2rem;
  background: ${globalStyles.mainColor};
  color: ${globalStyles.white};
  cursor: pointer;
  justify-content: center;
  align-items: center;
`

export const SCIstStatusAddText = styled.p`
    font-size: 1.2rem;

`

export const SCIstStatusAddNew = styled.div`
  display: flex;
  justify-content: space-between;
`