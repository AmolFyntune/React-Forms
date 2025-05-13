/* eslint-disable no-unused-vars */
import { FormProvider, TextRHF, yup } from "@repo/form-config";
import { Stepper, SubmitButton } from "@repo/ui";
import React, { useEffect } from "react";

const validationSchema = yup.object({
   full_name: yup.string().required("Please Enter Full Name."),
   email: yup.string().required("Please Enter Email."),
   mobile_no: yup.string().required("Please Enter Mobile Number."),
});

const CommunicationForm = ({ activeStep, setActiveStep }) => {
   return (
      <FormProvider
         name="communicationForm"
         validationSchema={validationSchema}
         initialValues=""
      >
         {/* whole Form Container */}
         <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
               <h2 className=" text-xl font-bold text-gray-600 ">
                  How can we connect with You?
               </h2>
               <Stepper
                  totalSteps={3}
                  className="flex items-center justify-center"
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
               />
            </div>

            {/* inputs wrapper */}
            <div>
               <TextRHF name={"full_name"} label={"Full Name"} />
               <TextRHF name={"email"} label={"Email"} />
               <TextRHF name={"mobile_no"} label={"Mobile Number"} />
            </div>

            {/* button wrapper */}
            <div className="mt-1 flex justify-between gap-2">
               <SubmitButton className="bg-primary/40 hover:bg-primary/50 w-[50%] p-2.5">
                  Back
               </SubmitButton>
               <SubmitButton className="w-[50%] p-3">Proceed</SubmitButton>
            </div>
         </div>
      </FormProvider>
   );
};

export default CommunicationForm;
