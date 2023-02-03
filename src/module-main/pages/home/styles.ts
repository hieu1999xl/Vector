import styled from "styled-components";
import * as globalStyles from "../../../styles/global"

export const SCBoxFilter = styled.div`
  display: flex;
  padding: 20px 0;
`

export const SCProductFilter = styled.div`
  background-color: ${globalStyles.white};
  box-shadow: 0px 10px 20px #C4C8D066;
  border-radius: 12px;
  max-width: 570px;
  padding: 20px;
  width: 100%;
`

export const SCLocationFilter = styled.div`
  background-color: ${globalStyles.white};
  box-shadow: 0px 10px 20px #C4C8D066;
  border-radius: 12px;
  max-width: 612px;
  padding: 20px;
  width: 100%;
`


export const SCProductBoxSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SCProducFilterHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 14px;
`

export const SCProductFilterText = styled.p`
  font-size: 2rem;
  line-height: 2.6rem;
  font-weight: 500;
  padding-left: 18px;
`