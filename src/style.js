import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
}

:root{
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;

    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;

    --negative: #E60000;
    --warning: #FFCD07;
    --success: #168821;
    --information: #155BCB;

}

.grey{
    color: var(--gray-50)
}
.white{
    color: #fff
}
.green{
    color: var(--color-primary)
}

.heading1{
    font-weight: bold; 
    font-size: 26px;
    color: var(--gray-100)
}

.heading2{
    font-weight: bold;
    font-size: 22px;
    color: var(--gray-100)
}

.heading3{
    font-weight: bold;
    font-size: 18px;
    color: var(--gray-100)
}

.heading4{
    font-weight: bold;
    font-size: 14px;
    color: var(--gray-100)
}

.headline{
    font-weight: normal;
    font-size: 16px;
    color: var(--gray-100)
}

.body{
    font-weight: normal;
    font-size: 14px;
    color: var(--gray-100)
}

.body600{
    font-weight: 600;
    font-size: 14px;
    color: var(--gray-100)
}

.caption{
    font-weight: normal;
    font-size: 12px;
    color: var(--gray-100)
}

`

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 90%;
    margin: 0 115px;
    flex-direction: row;
  }
`
