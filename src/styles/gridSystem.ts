import styled from "styled-components";
import * as globalStyles from "./global"

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

export const SCGrid = styled.div`
    margin: 0 auto;
    padding: 0 ${globalStyles.pd};
    @media (min-width: ${size.laptopL}) {
        max-width: 1850px;
      }
`

export const SCRow  = styled.div`
    margin-left: calc(var(--pd) * -1);
    margin-right: calc(var(--pd) * -1);
    display: flex;
    flex-wrap: wrap;
`

export const SCFull = styled.div`
    max-width: 1260px;
    padding-left: ${globalStyles.pd};
    padding-right: ${globalStyles.pd};
    display: flex;
    flex-wrap: wrap

`
export const SCCol = styled.div`
    padding-left: ${globalStyles.pd};
    padding-right: ${globalStyles.pd};
`

export const SCCol_3 = styled.div`
    flex: 0 0 25%;
    max-width: 25%
`

export const SCCol_4 = styled.div`
    flex: 0 0 33.33%;
    max-width: 33.33%;
`


export const SCCol_6 = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
`

export const SCCol_8 = styled.div`
    flex: 0 0 75%;
    max-width: 75%;
    padding-left: 50px;
`