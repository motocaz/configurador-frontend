import { z } from "zod"

export const clinicBusinessInfoSchema = z.object({
    whatsappClinicNumber: z.string().min(1, "WhatsApp number is required"),
    clinicName: z.string().min(1, "Clinic name is required"),
    clinicWebsite: z.string().url("Invalid URL").optional().or(z.literal("")),
    openingTime: z.string().min(1, "Opening time is required"),
    closingTime: z.string().min(1, "Closing time is required"),
})
