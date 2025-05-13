/* eslint-disable no-unused-vars */
import { FormProvider, SelectRHF, yup } from "@repo/form-config";
import { Stepper, SubmitButton, termAnnualIncomeOptions } from "@repo/ui";
import React, { useEffect } from "react";

const validationSchema = yup.object({
   occupation: yup.string().required("Please Enter Your Occupation."),
   education: yup.string().required("Please Enter Your Education."),
   annual_income: yup.string().required("Please Enter Your Annual Income."),
});

const EligibilityForm = ({ activeStep, setActiveStep }) => {
   const onSubmit = () => {
      setActiveStep(3);
   };

   return (
      <FormProvider
         name="eligibiltyForm"
         validationSchema={validationSchema}
         initialValues={{}}
         onSubmit={onSubmit}
      >
         <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
               <h2 className=" text-xl font-bold text-gray-600 ">
                  Help Us With Your Few Details
               </h2>
               <Stepper
                  activeStep={activeStep}
                  setActive={setActiveStep}
                  totalSteps={3}
                  className="flex items-center justify-center"
               />
            </div>

            <div>
               <SelectRHF
                  name={"occupation"}
                  label={"Occupation"}
                  options={[
                     { id: 1, name: "Self-Employed" },
                     { id: 2, name: "Salaried" },
                  ]}
               />
               <SelectRHF
                  name={"education"}
                  label={"Education"}
                  options={[
                     { id: 1, name: "Graduate" },
                     { id: 2, name: "Post-Graduate" },
                     { id: 3, name: "12th Pass" },
                     { id: 4, name: "10th Pass" },
                  ]}
               />
               <SelectRHF
                  name={"annual_income"}
                  label={"Annual Income"}
                  options={termAnnualIncomeOptions}
               />
            </div>

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

export default EligibilityForm;
