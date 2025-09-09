interface StepIndicatorProps {
    currentStep: number
    totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    return (
        <div className="flex justify-center space-x-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentStep ? "bg-[#0f62fe]" : index < currentStep ? "bg-[#0f62fe]" : "bg-[#dde1e6]"
                        }`}
                />
            ))}
        </div>
    )
}
