import styled from "styled-components"
import * as globalStyles from "../../../styles/global"

export const SCTableBox = styled.div`
    background-color: ${globalStyles.white};
    border-radius: 12px;
    padding: 20px;
`
export const SCTableInformation = styled.div`
    display: flex;
    align-items: center;    
    padding-bottom: 20px;
`

export const SCTableStyle = styled.div`
    padding-left : 16px;
    padding-right: 32px;
`
export const SCTableStyleText = styled.p`
    font-size: 1rem;
    color: ${globalStyles.black};
`
export const SCTableStyleTextSpan = styled.span`
    font-size: 1.2rem;
    color: ${globalStyles.black};
    font-weight: 500;
    max-width: 130px;
    display: block;
`

export const SCTableList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`

export const SCTableItem = styled.li`
    display: block;
    list-style: none;
    padding: 0 30px;
    border-left: 1px solid #F5F6FA

`

export const SCTableItemName = styled.p`
   font-size: 1.4rem;
   color: ${globalStyles.black};
   font-weight: 300;

`

export const SCTableItemValue = styled.p`
   font-size: 1.6rem;
   color: ${globalStyles.black};
   font-weight: 500;

`

export const SCTableTab = styled.table`
    border: 1px solid #D8D8D8;
    border-collapse: collapse;
    border-radius: 6px;
`

export const SCTableTr = styled.tr`
    text-align: left;
    
`

export const SCTableTh = styled.th`
    padding: 6px 12px;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${globalStyles.black};
    border: 1px solid #D8D8D8;
    border-collapse: collapse;
`

export const SCTableCheckbox = styled.span`
    padding-right: 10px;
`

export const SCTableTd = styled.td`
    padding: 6px 12px;
    border-left: 1px solid #D8D8D8;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${globalStyles.black};
`