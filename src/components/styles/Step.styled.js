import styled from "styled-components";

export const Step=styled.div`
border: 1px solid #d1d5db;
border-radius: 50%;
height:30px;
width: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: small;
margin: 1rem;
background-color: ${({active}) => active ? "#664de5": ""};
color: ${({active}) => active ? "#ffff": ""};
cursor: pointer;
`