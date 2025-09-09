"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { doctorSchema } from "@/lib/schemas"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

interface AddDoctorStepProps {
    append: (doctor: z.infer<typeof doctorSchema>) => void
    cancel: () => void
}

const daysOfWeek = [
    { id: "monday", label: "Seg" },
    { id: "tuesday", label: "Ter" },
    { id: "wednesday", label: "Qua" },
    { id: "thursday", label: "Qui" },
    { id: "friday", label: "Sex" },
    { id: "saturday", label: "Sáb" },
    { id: "sunday", label: "Dom" },
]

type DoctorFormValues = z.infer<typeof doctorSchema>

export function AddDoctorStep({ append, cancel }: AddDoctorStepProps) {
    const form = useForm<DoctorFormValues>({
        resolver: zodResolver(doctorSchema),
        defaultValues: {
            name: "",
            specialty: "",
            schedule: {
                days: [],
                shift: "",
                lunchTime: "",
            },
        },
    })

    const onSubmit = (data: DoctorFormValues) => {
        append(data)
        cancel()
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-[#21272a]">
                    Adicionar Novo Médico
                </CardTitle>
                <p className="text-sm text-[#697077]">
                    Preencha os dados para cadastrar um novo médico e sua disponibilidade.
                </p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="name" className="text-sm text-[#21272a]">
                                        Nome do médico
                                    </Label>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            {...field}
                                            className="border-[#dde1e6]"
                                            placeholder="Dr. João Silva"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="specialty"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="specialty" className="text-sm text-[#21272a]">
                                        Especialidade
                                    </Label>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="border-[#dde1e6]">
                                                <SelectValue placeholder="Selecione a especialidade" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="cardiologia">Cardiologia</SelectItem>
                                            <SelectItem value="dermatologia">Dermatologia</SelectItem>
                                            <SelectItem value="pediatria">Pediatria</SelectItem>
                                            <SelectItem value="ortopedia">Ortopedia</SelectItem>
                                            <SelectItem value="ginecologia">Ginecologia</SelectItem>
                                            <SelectItem value="neurologia">Neurologia</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="schedule.days"
                            render={() => (
                                <FormItem>
                                    <div className="mb-4">
                                        <Label className="text-base font-medium">
                                            Dias de Trabalho
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Selecione os dias em que o médico estará disponível.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2">
                                        {daysOfWeek.map(day => (
                                            <FormField
                                                key={day.id}
                                                control={form.control}
                                                name="schedule.days"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={day.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(day.id)}
                                                                    onCheckedChange={checked => {
                                                                        const currentValue = field.value || []
                                                                        return checked
                                                                            ? field.onChange([
                                                                                ...currentValue,
                                                                                day.id,
                                                                            ])
                                                                            : field.onChange(
                                                                                currentValue?.filter(
                                                                                    value => value !== day.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <Label className="font-normal">{day.label}</Label>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="schedule.shift"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Turno de Trabalho</Label>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione o turno" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="morning">Manhã (8h-12h)</SelectItem>
                                            <SelectItem value="afternoon">Tarde (14h-18h)</SelectItem>
                                            <SelectItem value="night">Noite (19h-22h)</SelectItem>
                                            <SelectItem value="full">Integral (8h-18h)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="schedule.lunchTime"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Horário de Almoço</Label>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione o horário de almoço" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="12:00-13:00">12:00 - 13:00</SelectItem>
                                            <SelectItem value="13:00-14:00">13:00 - 14:00</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-3">
                            <Button
                                type="button"
                                onClick={cancel}
                                variant="outline"
                                className="flex-1 border-[#dde1e6] bg-transparent"
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="button"
                                onClick={form.handleSubmit(onSubmit)}
                                className="flex-1 bg-[#0f62fe] hover:bg-[#0353e9] text-white"
                            >
                                Adicionar Médico
                            </Button>
                        </div>
                    </div>
                </Form>
            </CardContent>
        </Card>
    )
}

