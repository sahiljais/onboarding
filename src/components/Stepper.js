import React from "react";
import { Flex } from "./styles/Flex.styled";
import { Line, Step } from "./styles/Step.styled";

export default function Stepper ({currentStep,updateStep}) {

    const steps = [1,2,3,4];

    const handleClick = (item) => {
        updateStep(item)
    }

    return(
        <Flex>
            {steps.map((item) => {
                return (
                    <div style={{position:"relative"}}>
                        <Step active={currentStep >=item ? true : false } onClick={() => handleClick(item)}>{item}</Step>
                        {item === 4 ? null : <Line active={currentStep >item ? true : false } />}
                    </div>    
                )                
            })}
        </Flex>
    )
}