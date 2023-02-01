import styled from "styled-components"
import * as globalStyles from "../../../styles/global"

export const SCGridNav = styled.div`
    padding-top: 20px;
    top: 0;
    position: sticky;
    overflow-y: hidden;
    max-height: 100vh;
`

export const SCNavbar = styled.div`
    background-color: ${globalStyles.white};
    border-radius: 12px;
    box-shadow: 0px 10px 20px #C4C8D066;
    padding: 20px 34px;
`

export const SCProfile = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 3px solid #f9f9f9;
`

export const SCAvatar = styled.div`
    display: flex;
    align-items: center;
`

export const SCAvatarName = styled.span`
    font-size: 2rem;
    font-weight: 500;
    color: #333333;
    padding-left: 10px;

`
export const SCNavMenu = styled.div`
    // display: flex;
    padding-top: 30px;
`

export const SCNavName = styled.span`
    font-size: 1.8rem;
    font-weight: 500;
    color: ${globalStyles.black};
    padding-left: 10px;

`

export const SCNavChild = styled.span`
    font-size: 1.8rem;
    font-weight: 300;
    color: ${globalStyles.secondaryColor};
    padding-left: 18px;
    line-height: 24px;
    text-transform: capitalize;

`

export const SCNavBox = styled.div`
   margin: 0 auto;
`

export const SCNavList = styled.ul`
    padding-bottom: 20px;
    border-bottom: 3px solid #f9f9f9;
`

export const SCNavItem = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 8px 0;
    cursor: pointer;
`
export const SCCount = styled.div`
    padding-bottom: 20px;
    border-bottom: 3px solid #f9f9f9;
`

export const SCNavCount = styled.div`
    background-color: ${globalStyles.secondaryColor};
    border-radius: 12px 12px 0 0;
    padding: 15px 25px 0 35px;
`
export const SCNavCountHeader = styled.div`
    padding-bottom: 8px;
    border-bottom: 2px dashed #f9f9f9;
    color: ${globalStyles.black};
    font-size: 1.5rem;
    font-weight:  500;
    display: flex;
    justify-content: space-between;
`

export const SCNavCountList = styled.ul`
    padding: 0;
    margin: 0;
`
export const SCNavCountItem = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight:  500;
    line-height: 21px;
    padding: 8px 0;
    list-style: none;

`

export const SCNavCountFooter = styled.div`
    padding: 15px 25px 12px 35px;
    border-radius: 0 0 12px 12px;
    color: ${globalStyles.white};
    background-color: ${globalStyles.black};
    font-size: 1.5rem;
    line-height: 21px;
    font-weight:  500;
    display: flex;
    justify-content: space-between;
`

export const SCNavLogout = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
`
export const SCNavLogoutText = styled.span`
    font-size: 1.8rem;
    font-weight:  500;
    padding-left: 16px;
    color: #52575D;
`
export const SCMenuLeft = styled.div`
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 10px;
`
export const SCMenuItem = styled.div<{ active: true | false }>`
  color: ${props => (props.active ? '#0a58ca' : '#495057')};
  font-weight: 600;
  cursor: pointer;
`
export const SCItemChild = styled.div<{ active: true | false, status: true | false }>`
  color: ${props => (props.active ? '#929292' : '#000000')};
  font-size: 1.8rem;
    font-weight: 300;
    padding-left: 18px;
    line-height: 24px;
    text-transform: capitalize;
  overflow: hidden;
  transition: height 0.3s;
  height: ${props => (props.status ? '24px' : '0px')};
  margin: ${props => (props.status ? '12px 0px' : '0px')};
`
export const SCLogoutBtn = styled.div`
  font-weight: 600;
  cursor: pointer;
`