import styled from "styled-components"
import * as globalStyles from "../../../styles/global"

export const SCHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 48px;
  /* align-items: center; */
`

export const SCHeaderText = styled.p`
  font-size: 3.6rem;
  font-weight: 500;
  color: ${globalStyles.black};
`

export const SCHeaderContent = styled.div`
  display: flex;
`

export const SCHeaderWelcome = styled.p`
  font-size: 2rem;
  color: ${globalStyles.black};

`

export const SCHeaderName = styled.span`
  font-weight: 500;
`