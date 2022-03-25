import React, { useState } from "react";
import { Button } from "./styles/Button.styled";
import { CardStyle } from "./styles/Card.styled";
import { CardContainer } from "./styles/Container.styled";
import { Flex, FlexColumn } from "./styles/Flex.styled";
import { StyledImage } from "./styles/Image.styled";
import { Typography } from "./styles/Typography.styled";

export default function Card({heading,subHeading,currentStep,updateStep,finalStep}){
    const [selected, setSelected] = useState(null)

    const handleClick = () => {
        if(currentStep < 4)
        updateStep(currentStep+1)
    }

    return(
        <CardContainer>
            {finalStep ? <div style={{display:"flex",justifyContent:"center"}}> <StyledImage src="/tick-circle.svg" size="large"></StyledImage></div> : null }
            <FlexColumn alignItems={"center"}>
            {heading}
            {subHeading}
            </FlexColumn>
            {finalStep ?  null : <Flex 
             justifyContent={"center"}
             padding={"2.5rem 0rem 1rem"}>
        <CardStyle
         active={selected === 1 ? true : false} 
         onClick={() => { setSelected(1)}}>
            <StyledImage src={selected === 1 ? "/personColor.svg":"/person.svg"}></StyledImage>
            <h3>For myself</h3>
            <Typography>Write better. Think more clearly. Stay organized.</Typography>
        </CardStyle>
        <CardStyle
         marginRight={"0rem"}
         active={selected === 2 ? true : false} 
         onClick={() => { setSelected(2)}}>
        <StyledImage src={selected === 2 ? "/user-group-color.svg":"/user-group.svg"}></StyledImage>
        <h3>With my team</h3>
        <Typography>Wikis, docs tasks and projects, all in one place.</Typography>
    </CardStyle>
    </Flex>}
    {finalStep ? <Button width={"332px"} margin={"2rem 0rem 0rem"}>Launch Cutshort</Button> : <Button width={"358px"} onClick={handleClick}>Create Workspace</Button>}
    </CardContainer>
    )
}