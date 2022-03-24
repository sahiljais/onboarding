import React from "react";
import { Button } from "./styles/Button.styled";
import { CardContainer, FormContainer } from "./styles/Container.styled";
import { Flex, FlexColumn } from "./styles/Flex";
import { StyledImage } from "./styles/Image.styled";
import { Input } from "./styles/Input.styled";
import { Label } from "./styles/Typography.styled";

export default function Form({heading,subHeading,currentStep,updateStep,primaryLabel,secondaryLabel,finalStep}){

    const handleClick = () => {
        if(currentStep < 4)
        updateStep(currentStep+1)
    }

    return(
        <CardContainer>
            {finalStep ? <StyledImage src="/tick-circle.svg"></StyledImage> : null }
        <FlexColumn alignItems={"center"}>
            {heading}
            {subHeading}
        </FlexColumn>
        { finalStep ? <Button margin={"2rem 0rem 0rem"}>Launch Cutshort</Button>  : <FormContainer>
            <FlexColumn>
        <Label>{primaryLabel}</Label>
        <Input placeholder="Steve Jobs"></Input>
        </FlexColumn>
        <FlexColumn>
        <Label>{secondaryLabel}</Label>
        <Input placeholder="Steve" />
        </FlexColumn>
        <Button onClick={handleClick}>Create Workspace</Button>
        </FormContainer>}
        </CardContainer>

    )
}