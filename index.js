
 
import { useState } from "react";
import { CommunicationForm, EligibilityForm, PersonalForm } from "./forms";

import InputPageMessage from "./components/InputPageMessage";
import { PersonalForm } from "./forms";


const InputPage = () => {
   const [activeStep, setActiveStep] = useState(1);

   console.log("yyyyy", activeStep);
   return (
      <div className="mx-auto flex justify-between gap-2  py-5">
         <div className="">Welcome Message</div>
         <div className="w-sm rounded-md border border-gray-200 bg-gray-50 p-4 shadow-md">
            {activeStep === 1 && (
               <PersonalForm
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
               />
            )}

            {activeStep === 2 && (
               <EligibilityForm
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
               />
            )}

            {activeStep === 3 && (
               <CommunicationForm
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
               />
            )}
         </div>
      </div>
   );
};

export default InputPage;
