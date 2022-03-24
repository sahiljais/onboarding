import styled from "styled-components"

export const StyledImage=styled.img`
height: ${({size}) => size === "large" ? "70px" :"25px"};
width: ${({size}) => size === "large" ? "70px" :"25px"};
min-height: ${({size}) => size === "large" ? "70px" :"25px"};
min-width: ${({size}) => size === "large" ? "70px" :"25px"};
`