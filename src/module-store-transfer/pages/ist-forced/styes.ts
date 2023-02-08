import styled from "styled-components";
import * as globalStyles from "../../../styles/global"
import * as GridSystem from "../../../styles/gridSystem"


export const SCBoxFilter = styled.div`
  display: flex;
  padding: 20px 0;
`

export const SCQuickFilters = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  padding-bottom: 20px;
`

export const SCBoxFilterButton = styled.div`
    padding-left: 26px;
    margin-left: 26px;
    border-left: 2px solid #D8D8D8;
`

export const SCBoxFilterButtonLabel = styled.p`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 12px;
`

export const SCBoxFilterButtonFlex = styled.div`
  display: flex;
  align-items: center;
`

export const SCExportAllBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
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