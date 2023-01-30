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
    padding-bottom: 20px;
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
    display: flex;
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
    padding: 12px 0;
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
    padding: 8px 0;
    list-style: none;

`

export const SCNavCountFooter = styled.div`
    padding: 15px 25px 12px 35px;
    border-radius: 0 0 12px 12px;
    color: ${globalStyles.white};
    background-color: ${globalStyles.black};
    font-size: 1.5rem;
    font-weight:  500;
    display: flex;
    justify-content: space-between;
`

export const SCNavLogout = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: center;
`
export const SCNavLogoutText = styled.span`
    font-size: 1.8rem;
    font-weight:  500;
    padding-left: 16px;
    color: #52575D
`