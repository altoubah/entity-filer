import { z } from "zod";

// Business Info Schema
export const BusinessInfoSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  ein: z.string().optional(),
  entityType: z.enum(["llc", "corporation", "nonprofit"]),
  state: z.string().length(2),
  address: z.string().min(5),
  city: z.string().min(2),
  zipCode: z.string().min(5),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Order Schema
export const OrderSchema = z.object({
  id: z.string().uuid(),
  businessInfoId: z.string().uuid(),
  customerId: z.string().uuid(),
  amount: z.number().positive(),
  currency: z.string().length(3),
  status: z.enum(["pending", "paid", "failed", "refunded"]),
  paymentProvider: z.string(),
  paymentId: z.string(),
  metadata: z.record(z.string()).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Pricing Tier Schema
export const PricingTierSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  entityType: z.enum(["llc", "corporation", "nonprofit"]),
  state: z.string().length(2),
  basePrice: z.number().positive(),
  employeeMultiplier: z.number().min(0),
  revenueMultiplier: z.number().min(0),
  features: z.array(z.string()),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Types
export type BusinessInfo = z.infer<typeof BusinessInfoSchema>;
export type Order = z.infer<typeof OrderSchema>;
export type PricingTier = z.infer<typeof PricingTierSchema>; 