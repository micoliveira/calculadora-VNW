import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const Main = styled.main`
    background-color: #fcbde9;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    `


export const Btn = styled.button`
border: none;
padding: 10px 15px;
 color: #ee0ac0;
border-radius: 5px;
margin: 5px;
background-color: white;

&:hover{
    background-color:#e8e8e8 ;
    color: #3d2e3a;
    border: #6d3b63 solid 1px;
}
`

export const Resultado = styled.h2`

border-radius: 50%;
padding: 10px;
color: #584754;
margin: 10px;
`
export const Divisão = styled.div`
    border-radius: 5%;
    border: 3px #160d14 solid;
    padding: 3px;
    margin: 4px;
    text-align: center;
   
`

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    text-align: center;
    border: 3px #6d3b63 solid;
    border-radius: 40%;


`