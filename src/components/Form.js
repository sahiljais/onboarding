import React from "react";
import { Button } from "./styles/Button.styled";
import { CardContainer, FormContainer } from "./styles/Container.styled";
import { Flex, FlexColumn } from "./styles/Flex.styled";
import { FixedInput, Input } from "./styles/Input.styled";
import { Label, SmallText } from "./styles/Typography.styled";

export default function Form({heading,subHeading,currentStep,updateStep,primaryLabel,secondaryLabel,primaryPlaceholder,secondaryPlaceholder}){

    const handleClick = () => {
        if(currentStep < 4)
        updateStep(currentStep+1)
    }

    return(
        <CardContainer>
            <FlexColumn alignItems={"center"}>
            {heading}
            {subHeading}
            </FlexColumn>
            <FormContainer>
              <FlexColumn>
                <Label>{primaryLabel}</Label>
                <Input placeholder={primaryPlaceholder}></Input>
              </FlexColumn>
              <FlexColumn>
                <Label>{secondaryLabel}</Label>
                {currentStep === 2 ? 
                <Flex>
                  <FixedInput><SmallText>www.cutshort.com/</SmallText></FixedInput>
                  <Input borderRadius={"0px 5px 5px 0px"} placeholder={secondaryPlaceholder} />
                </Flex> : <Input placeholder={secondaryPlaceholder} /> }
              </FlexColumn>
              <Button onClick={handleClick}>Create Workspace</Button>
            </FormContainer>
        </CardContainer>
    )
}