"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { onboardingSchema, OnboardingData } from "@/lib/schemas"
import { generateConfigJSON } from "@/lib/jsonConfig"

export function useOnboarding() {
    const [currentStep, setCurrentStep] = useState(0)

    const form = useForm<OnboardingData>({
        resolver: zodResolver(onboardingSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            password: "",
            acceptTerms: false,
            clinicName: "",
            whatsappClinicNumber: "",
            clinicWebsite: "",
            openingTime: "",
            closingTime: "",
            clinicAddress: "",
            clinicAddressNumber: "",
            clinicNeighborhood: "",
            clinicCity: "",
            clinicState: "",
            clinicZip: "",
            doctors: [],
        },
    })

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleGenerateConfig = () => {
        const formData = form.getValues()
        const doctors = form.getValues("doctors")
        return generateConfigJSON(formData, doctors)
    }

    return {
        currentStep,
        form,
        nextStep,
        prevStep,
        generateConfigJSON: handleGenerateConfig,
    }
}

