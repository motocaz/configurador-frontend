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
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Phone, Lock } from "lucide-react"

interface WelcomeStepProps {
    nextStep: () => void
}

export function WelcomeStep({ nextStep }: WelcomeStepProps) {
    const { control, trigger } = useFormContext()

    const handleNext = async () => {
        const isValid = await trigger([
            "fullName",
            "email",
            "phone",
            "password",
            "acceptTerms",
        ])
        if (isValid) {
            nextStep()
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-[#21272a]">
                    Bem-vindo ao nosso sistema de configuração!
                </CardTitle>
                <p className="text-sm text-[#697077] mt-2">
                    Para começar, preencha suas informações básicas de registro abaixo.
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <FormField
                    control={control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="fullName" className="text-sm text-[#21272a]">
                                Nome completo
                            </Label>
                            <FormControl>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="fullName"
                                        placeholder="John Doe"
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="email" className="text-sm text-[#21272a]">
                                Email
                            </Label>
                            <FormControl>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john.doe@example.com"
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
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="phone" className="text-sm text-[#21272a]">
                                Telefone
                            </Label>
                            <FormControl>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="(11) 99999-9999"
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
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <Label
                                htmlFor="password"
                                className="text-sm text-[#21272a]"
                            >
                                Senha
                            </Label>
                            <FormControl>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="********"
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
                    name="acceptTerms"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <Label>
                                    I accept the usage terms and the privacy policy
                                </Label>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <Button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-[#21272a] text-white"
                >
                    Avançar
                </Button>
            </CardContent>
        </Card>
    )
}