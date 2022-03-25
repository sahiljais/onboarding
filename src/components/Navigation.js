import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import Stepper from "./Stepper";
import { CardTitle } from "./styles/Title.styled";
import { SmallText } from "./styles/Typography.styled";

export default function Navigation(){
    const [currentStep, updateStep] = useState(1);

    return(
        <>
        <Stepper currentStep={currentStep} updateStep={updateStep} />
        {currentStep === 1 ? 
        <Form
         heading={<CardTitle>Welcome! First things first...</CardTitle>}
         subHeading={<SmallText>You can always change them later.</SmallText>}
         currentStep={currentStep}
         updateStep={updateStep}
         primaryLabel={"Full Name"}
         secondaryLabel={"Display Name"}
         primaryPlaceholder={"Steve Jobs"}
         secondaryPlaceholder={"Steve"}
         />: null}
         {currentStep === 2 ? 
        <Form
         heading={<CardTitle>Let's set up a home for all your work</CardTitle>}
         subHeading={<SmallText>You can always create another workspace later.</SmallText>}
         currentStep={currentStep}
         updateStep={updateStep}
         primaryLabel={"Workspace Name"}
         secondaryLabel={<>Workspace URL <SmallText>(optional)</SmallText></>}
         primaryPlaceholder={"Cutshort"}
         secondaryPlaceholder={"Example"}
         />: null}
         {currentStep === 3 ? 
         <Card
          heading={<CardTitle>How are you planning to use Cutshort?</CardTitle>}
          subHeading={<SmallText>We'll streamline your setup experience accordingly.</SmallText>}
          currentStep={currentStep}
          updateStep={updateStep} />
         : null}
         {currentStep === 4 ? 
         <Card
         heading={<CardTitle>Congratulations, Eren!</CardTitle>}
         subHeading={<SmallText>You have completed onboarding, you can start using Cutshort!</SmallText>}
         currentStep={currentStep}
         updateStep={updateStep}
         finalStep={true} />
        : null}
     </>
    )
}