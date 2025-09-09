"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

interface JsonConfigStepProps {
    generateConfigJSON: () => any
    prevStep: () => void
}

export function JsonConfigStep({ generateConfigJSON, prevStep }: JsonConfigStepProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        const json = JSON.stringify(generateConfigJSON(), null, 2)
        navigator.clipboard.writeText(json)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

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
                    <Button onClick={handleCopy} variant="ghost" size="icon" type="button" className="absolute top-2 right-5 h-8 w-8 bg-transparent hover:bg-gray-200">
                        {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                        <span className="sr-only">{copied ? "Copiado!" : "Copiar JSON"}</span>
                    </Button>
                    <pre className="bg-[#f2f4f8] p-4 rounded-lg border border-[#dde1e6] text-xs overflow-auto max-h-96 text-[#21272a]">
                        {JSON.stringify(generateConfigJSON(), null, 2)}
                    </pre>
                </div>

                <div className="flex gap-3">
                    <Button onClick={prevStep} variant="outline" className="flex-1 border-[#dde1e6] bg-transparent">
                        Voltar
                    </Button>
                    <Button onClick={handleCopy} className="flex-1">
                        {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                        {copied ? "Copiado!" : "Copiar JSON"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
