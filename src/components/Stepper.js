import React from "react";
import { Flex } from "./styles/Flex";
import { Step } from "./styles/Step.styled";

export default function Stepper ({currentStep}) {
    return(
        <Flex>
            <Step active={currentStep >=1 ? true : false }>1</Step>
            <Step active={currentStep >=2 ? true : false }>2</Step>
            <Step active={currentStep >=3 ? true : false }>3</Step>
            <Step active={currentStep >=4 ? true : false }>4</Step>
        </Flex>
    )
}