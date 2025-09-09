import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Copy } from "lucide-react"

interface JsonConfigStepProps {
    generateConfigJSON: () => any
    prevStep: () => void
}

export function JsonConfigStep({ generateConfigJSON, prevStep }: JsonConfigStepProps) {
    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-[#21272a]">
                    Configuração Final
                </CardTitle>
                <p className="text-sm text-[#697077]">
                    Seu arquivo de configuração JSON está pronto. Copie o código abaixo para utilizá-lo.
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="relative">
                    <pre className="bg-[#f2f4f8] p-4 rounded-lg border border-[#dde1e6] text-xs overflow-auto max-h-96 text-[#21272a]">
                        {JSON.stringify(generateConfigJSON(), null, 2)}
                    </pre>
                </div>

                <div className="flex gap-3">
                    <Button onClick={prevStep} variant="outline" className="flex-1 border-[#dde1e6] bg-transparent">
                        Voltar
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
