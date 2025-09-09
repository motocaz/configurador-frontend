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
import { MapPin, Building2, Hash, Map } from "lucide-react"

interface ClinicInfoStepProps {
    nextStep: () => void
    prevStep: () => void
}

export function ClinicInfoStep({ nextStep, prevStep }: ClinicInfoStepProps) {
    const { control, trigger } = useFormContext()

    const handleNext = async () => {
        const isValid = await trigger([
            "clinicAddress",
            "clinicAddressNumber",
            "clinicNeighborhood",
            "clinicCity",
            "clinicState",
            "clinicZip",
        ])
        if (isValid) {
            nextStep()
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-[#21272a]">
                    Endereço da Clínica
                </CardTitle>
                <p className="text-sm text-[#697077] mt-2">
                    Agora, preencha as informações de endereço da sua clínica.
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <FormField
                    control={control}
                    name="clinicAddress"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="clinicAddress" className="text-sm text-[#21272a]">
                                Endereço
                            </Label>
                            <FormControl>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="clinicAddress"
                                        placeholder="Avenida Paulista"
                                        {...field}
                                        className="border-[#dde1e6] pl-10"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-3">
                    <FormField
                        control={control}
                        name="clinicAddressNumber"
                        render={({ field }) => (
                            <FormItem>
                                <Label htmlFor="clinicAddressNumber" className="text-sm text-[#21272a]">
                                    Número
                                </Label>
                                <FormControl>
                                    <div className="relative">
                                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="clinicAddressNumber"
                                            placeholder="123"
                                            {...field}
                                            className="border-[#dde1e6] pl-10"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="clinicNeighborhood"
                        render={({ field }) => (
                            <FormItem>
                                <Label htmlFor="clinicNeighborhood" className="text-sm text-[#21272a]">
                                    Bairro
                                </Label>
                                <FormControl>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="clinicNeighborhood"
                                            placeholder="Bela Vista"
                                            {...field}
                                            className="border-[#dde1e6] pl-10"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={control}
                    name="clinicCity"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="clinicCity" className="text-sm text-[#21272a]">
                                Cidade
                            </Label>
                            <FormControl>
                                <div className="relative">
                                    <Map className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="clinicCity"
                                        placeholder="São Paulo"
                                        {...field}
                                        className="border-[#dde1e6] pl-10"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="clinicState"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="clinicState" className="text-sm text-[#21272a]">
                                Estado
                            </Label>
                            <FormControl>
                                <div className="relative">
                                    <Map className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="clinicState"
                                        placeholder="SP"
                                        {...field}
                                        className="border-[#dde1e6] pl-10"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="clinicZip"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="clinicZip" className="text-sm text-[#21272a]">
                                CEP
                            </Label>
                            <FormControl>
                                <div className="relative">
                                    <Map className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="clinicZip"
                                        placeholder="00000-000"
                                        {...field}
                                        className="border-[#dde1e6] pl-10"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-3">
                    <Button
                        onClick={prevStep}
                        type="button"
                        variant="outline"
                        className="flex-1 border-[#dde1e6] bg-transparent"
                    >
                        Voltar
                    </Button>
                    <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-[#21272a] text-white"
                    >
                        Avançar
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
