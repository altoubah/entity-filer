import { z } from "zod";

// Input schemas
export const CheckoutInputSchema = z.object({
  amount: z.number().positive(),
  currency: z.string().length(3),
  customer: z.object({
    email: z.string().email(),
    name: z.string().min(1),
  }),
  metadata: z.record(z.string()).optional(),
});

export const WebhookEventSchema = z.object({
  id: z.string(),
  type: z.string(),
  data: z.record(z.unknown()),
});

// Types
export type CheckoutInput = z.infer<typeof CheckoutInputSchema>;
export type WebhookEvent = z.infer<typeof WebhookEventSchema>;

export interface CheckoutSession {
  id: string;
  url: string;
  amount: number;
  currency: string;
  status: "open" | "complete" | "expired";
}

// Payment Provider Interface
export interface PaymentProvider {
  /**
   * Creates a new checkout session
   */
  createCheckout(input: CheckoutInput): Promise<CheckoutSession>;

  /**
   * Verifies and parses a webhook event
   */
  verifyWebhook(raw: unknown, signature: string): Promise<WebhookEvent>;
} 