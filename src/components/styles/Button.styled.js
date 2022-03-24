import styled from "styled-components"

export const Button=styled.button`
padding: 0.75rem;
width: 100%;
background-color: #664de5;
color: #ffff;
border-radius: 5px;
border: none;
cursor: pointer;
margin: ${({ margin }) => margin ? margin : "" };
`