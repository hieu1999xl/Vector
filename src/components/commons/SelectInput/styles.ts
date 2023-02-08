import styled from "styled-components"
import * as globalStyles from "../../../styles/global"

export const SCSellectOption = styled.div`
  position: relative;
  margin: 3px;
`

export const SCSellectIcon = styled.img`
  position: absolute;
  top: 50%;
  color: #333;
  transform: translateY(-50%);
  pointer-events: none;
  left: 8px;
`

export const SCSellectBox = styled.select`
  padding-left: 20px;
  padding-right: 3px;
  border-radius: 6px;
  height: 40px;
  font-size: 1.3rem;
  line-height: 1.8rem;
   &:focus-visible {
     outline: none;
  }
  
`
