"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormContext } from "react-hook-form"
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Building, Globe, Phone, Clock } from "lucide-react"

interface ClinicBusinessInfoStepProps {
    nextStep: () => void
    prevStep: () => void
}

export function ClinicBusinessInfoStep({
    nextStep,
    prevStep,
}: ClinicBusinessInfoStepProps) {
    const { control, trigger } = useFormContext()

    const handleNext = async () => {
        const isValid = await trigger([
            "clinicName",
            "whatsappClinicNumber",
            "clinicWebsite",
            "openingTime",
            "closingTime",
        ])
        if (isValid) {
            nextStep()
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-[#21272a]">
                    Informações do Negócio
                </CardTitle>
                <p className="text-sm text-[#697077] mt-2">
                    Forneça os detalhes da sua clínica para personalizarmos sua experiência.
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <FormField
                    control={control}
                    name="clinicName"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="clinicName">Nome da Clínica</Label>
                            <FormControl>
                                <div className="relative">
                                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="clinicName"
                                        placeholder="Nome da sua clínica"
                                        {...field}
                                        className="pl-10"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="whatsappClinicNumber"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="whatsappClinicNumber">
                                Número do WhatsApp da Clínica
                            </Label>
                            <FormControl>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="whatsappClinicNumber"
                                        placeholder="+55 (11) 99999-9999"
                                        {...field}
                                        className="pl-10"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="clinicWebsite"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="clinicWebsite">Website da Clínica</Label>
                            <FormControl>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="clinicWebsite"
                                        placeholder="https://suaclinica.com"
                                        {...field}
                                        className="pl-10"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={control}
                        name="openingTime"
                        render={({ field }) => (
                            <FormItem>
                                <Label htmlFor="openingTime">Horário de Abertura</Label>
                                <FormControl>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="openingTime"
                                            type="time"
                                            {...field}
                                            className="pl-10"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="closingTime"
                        render={({ field }) => (
                            <FormItem>
                                <Label htmlFor="closingTime">Horário de Fechamento</Label>
                                <FormControl>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="closingTime"
                                            type="time"
                                            {...field}
                                            className="pl-10"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex gap-3 pt-4">
                    <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="flex-1 border-[#dde1e6] bg-transparent"
                    >
                        Voltar
                    </Button>
                    <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-[#0f62fe] hover:bg-[#0353e9] text-white"
                    >
                        Continuar
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
