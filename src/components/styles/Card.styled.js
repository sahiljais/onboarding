import styled from "styled-components"

export const CardStyle=styled.div`
display: flex;
flex-direction: column;
border: ${({active}) => active ? "1.5px solid #664de5" : "1.5px solid #d1d5db" };
width:8.5rem;
max-width: 8.5rem;
height: 10rem;
max-height: 10rem;
border-radius: 7px;
margin-right: ${({marginRight}) => marginRight ? marginRight : "1rem"};
padding:1rem;
word-break: break-word;
text-align: left;
transition: all 200ms ease-in;
cursor: pointer;

&:hover {
    border: 1.5px solid #664de5;
}
`