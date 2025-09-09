"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Plus, Trash2, User } from "lucide-react"
import { useState } from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { AddDoctorStep } from "./AddDoctorStep"

interface DoctorsListStepProps {
    nextStep: () => void
    prevStep: () => void
}

export function DoctorsListStep({
    nextStep,
    prevStep,
}: DoctorsListStepProps) {
    const [showAddDoctor, setShowAddDoctor] = useState(false)
    const { control, watch } = useFormContext()
    const { fields, append, remove } = useFieldArray({
        control,
        name: "doctors",
    })

    const doctors = watch("doctors")

    if (showAddDoctor) {
        return (
            <AddDoctorStep
                append={append}
                cancel={() => setShowAddDoctor(false)}
            />
        )
    }

    return (
        <Card className="w-full max-w-lg mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-[#21272a]">
                    Cadastro de Médicos
                </CardTitle>
                <p className="text-sm text-[#697077]">
                    Adicione ou remova médicos e gerencie suas informações de disponibilidade.
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-3">
                    {fields.map((doctor: any, index: number) => (
                        <div
                            key={doctor.id}
                            className="bg-[#f2f4f8] p-4 rounded-lg border border-[#dde1e6]"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-[#0f62fe] rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#21272a]">
                                            {doctor.name}
                                        </h3>
                                        <p className="text-sm text-[#697077]">
                                            {doctor.specialty}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="text-right">
                                        <div className="flex items-center text-sm text-[#697077]">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {/* You might need to format the schedule here */}
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => remove(index)}
                                        className="hover:bg-red-100"
                                    >
                                        <Trash2 className="w-5 h-5 text-red-500" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Button
                    onClick={() => setShowAddDoctor(true)}
                    className="w-full bg-[#000] text-white"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Cadastrar Nova Disponibilidade de Médico
                </Button>

                <div className="flex gap-3">
                    <Button
                        onClick={prevStep}
                        variant="outline"
                        className="flex-1 border-[#dde1e6] bg-transparent"
                    >
                        Voltar
                    </Button>
                    <Button
                        onClick={nextStep}
                        className="flex-1 bg-[#0f62fe] hover:bg-[#0353e9] text-white"
                    >
                        Ver Configuração
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}