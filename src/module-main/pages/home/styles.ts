import styled from "styled-components";
import * as globalStyles from "../../../styles/global"

export const SCBoxFilter = styled.div`
  display: flex;
  padding: 20px 0;
`
export const SCQuickFilters = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
`

export const SCQuickAction = styled.div`
  background-color: ${globalStyles.white};
  display: flex;
  padding: 8px 20px;
`

export const SCQuickActionLabel = styled.label`
  font-size: 1rem;
  color: ${globalStyles.secondaryColor};
`

export const SCQuickActionSelectInput = styled.select`
    font-weight: 500;
    font-family: 'Roboto';
    font-size: 1.4rem;
    outline: none;
    border: none;
    padding-right: 50px;
`

export const SCQuickActionSelect = styled.div`
  display: grid;
  padding-left: 30px;
`

export const SCQuickActionButton = styled.button`
  background-color: ${globalStyles.mainColor};
  height: 52px;
  width: 76px;
  border-radius: 6px;
`

export const SCQuickFilterBox = styled.div`
  padding: 0 24px;
  display: flex;
  align-items: center;
  border-right: 2px solid #D8D8D8 ;
`

export const SCQuickFiltersText = styled.p`
  font-size: 2rem;
  font-weight: 500;
`