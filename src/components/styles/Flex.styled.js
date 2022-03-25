import styled from "styled-components"

export const Flex=styled.div`
display: flex;
justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : ""};
padding: ${({padding}) => padding ? padding : ""};
`

export const FlexColumn=styled.div`
display:flex;
flex-direction: column;
align-items: ${({alignItems}) => alignItems ? alignItems : "" };
`