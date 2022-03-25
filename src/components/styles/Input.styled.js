import styled from "styled-components"

export const Input=styled.input`
padding:0.5rem 0.75rem;
margin-bottom: 1rem;
border-radius: ${({borderRadius}) => borderRadius ? borderRadius : "5px"};
outline: none;
border: 1px solid #d2d6e1;

::placeholder{
    color: #aeb7c9;
}
`

export const FixedInput=styled.div`
display: inline-block;
padding:0.5rem 0.75rem;
margin-bottom: 1rem;
outline: none;
border: 1px solid #d2d6e1;
border-right: none;
border-radius: 5px 0px 0px 5px;
background-color: #f8f9fc;
color: #a8b2c5;
`