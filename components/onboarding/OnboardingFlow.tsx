"use client"

import { WelcomeStep } from "./WelcomeStep"
import { ClinicInfoStep } from "./ClinicInfoStep"
import { DoctorsListStep } from "./DoctorsListStep"
import { JsonConfigStep } from "./JsonConfigStep"
import { StepIndicator } from "./StepIndicator"
import { Form } from "@/components/ui/form"
import { useOnboarding } from "@/hooks/useOnboarding"
import { FormProvider } from "react-hook-form"
import { ClinicBusinessInfoStep } from "./ClinicBusinessInfoStep"

export default function OnboardingFlow() {
    const {
        currentStep,
        form,
        nextStep,
        prevStep,
        generateConfigJSON,
    } = useOnboarding()

    const steps = [
        <WelcomeStep key="welcome" nextStep={nextStep} />,
        <ClinicBusinessInfoStep
            key="clinic-business-info"
            nextStep={nextStep}
            prevStep={prevStep}
        />,
        <ClinicInfoStep
            key="clinic-info"
            nextStep={nextStep}
            prevStep={prevStep}
        />,
        <DoctorsListStep
            key="doctors-list"
            nextStep={nextStep}
            prevStep={prevStep}
        />,
        <JsonConfigStep
            key="json-config"
            generateConfigJSON={generateConfigJSON}
            prevStep={prevStep}
        />,
    ]

    return (
        <FormProvider {...form}>
            <div
                className="min-h-screen flex items-center justify-center p-4 relative"
                style={{
                    backgroundImage: "url('/background-interface.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="w-full max-w-2xl relative z-10">
                    <div className="mb-8">
                        <StepIndicator currentStep={currentStep} totalSteps={steps.length} />
                    </div>
                    <Form {...form}>
                        <form>{steps[currentStep]}</form>
                    </Form>
                </div>
            </div>
        </FormProvider>
    )
}
