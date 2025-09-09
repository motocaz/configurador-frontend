import { z } from "zod";

export const welcomeSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    acceptTerms: z.boolean().refine(val => val === true, {
        message: "You must accept the terms and conditions",
    }),
});

export const clinicInfoSchema = z.object({
    clinicAddress: z.string().min(1, "Address is required"),
    clinicAddressNumber: z.string().min(1, "Address number is required"),
    clinicNeighborhood: z.string().min(1, "Neighborhood is required"),
    clinicCity: z.string().min(1, "City is required"),
    clinicState: z.string().min(1, "State is required"),
    clinicZip: z.string().min(1, "Zip code is required"),
});

const scheduleSchema = z.object({
    days: z.array(z.string()).nonempty("At least one day must be selected"),
    shift: z.string().min(1, "Shift is required"),
    lunchTime: z.string().optional(),
});

export const doctorSchema = z.object({
    name: z.string().min(1, "Doctor name is required"),
    specialty: z.string().min(1, "Specialty is required"),
    schedule: scheduleSchema,
});

import { clinicBusinessInfoSchema } from "./clinicBusinessInfoSchema"

export const onboardingSchema = welcomeSchema
    .merge(clinicBusinessInfoSchema)
    .merge(clinicInfoSchema)
    .extend({
        doctors: z.array(doctorSchema),
    });

export type OnboardingData = z.infer<typeof onboardingSchema>;
