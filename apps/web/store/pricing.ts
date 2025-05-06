import { create } from "zustand";
import { z } from "zod";

// Domain Types
export const EntityType = z.enum(["llc", "corporation", "nonprofit"]);
export type EntityType = z.infer<typeof EntityType>;

export const State = z.enum(["ca", "ny", "de"]);
export type State = z.infer<typeof State>;

export interface PricingInput {
  entityType: EntityType;
  state: State;
  employees: number;
  annualRevenue: number;
}

// Base prices by entity type
const BASE_PRICES = {
  llc: 299,
  corporation: 399,
  nonprofit: 499,
} as const;

// State filing fees
const STATE_FEES = {
  ca: 70,
  ny: 200,
  de: 89,
} as const;

// Employee multiplier (per employee)
const EMPLOYEE_MULTIPLIER = 10;

// Revenue multiplier (per $100k)
const REVENUE_MULTIPLIER = 0.1;

interface PricingState {
  calculatePrice: (input: PricingInput) => number;
}

export const usePricingStore = create<PricingState>((set, get) => ({
  calculatePrice: (input: PricingInput) => {
    const basePrice = BASE_PRICES[input.entityType];
    const stateFee = STATE_FEES[input.state];
    const employeeCost = input.employees * EMPLOYEE_MULTIPLIER;
    const revenueCost = (input.annualRevenue / 100000) * REVENUE_MULTIPLIER;

    return basePrice + stateFee + employeeCost + revenueCost;
  },
})); 