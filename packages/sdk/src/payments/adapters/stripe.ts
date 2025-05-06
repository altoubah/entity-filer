import Stripe from "stripe";
import {
  PaymentProvider,
  CheckoutInput,
  CheckoutSession,
  WebhookEvent,
  WebhookEventSchema,
} from "../ports";

export class StripePaymentProvider implements PaymentProvider {
  private stripe: Stripe;

  constructor(apiKey: string) {
    this.stripe = new Stripe(apiKey, {
      apiVersion: "2023-10-16",
    });
  }

  async createCheckout(input: CheckoutInput): Promise<CheckoutSession> {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: input.currency,
            product_data: {
              name: "Entity Filing",
            },
            unit_amount: input.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
      customer_email: input.customer.email,
      metadata: input.metadata,
    });

    return {
      id: session.id,
      url: session.url!,
      amount: session.amount_total!,
      currency: session.currency!,
      status: session.status as "open" | "complete" | "expired",
    };
  }

  async verifyWebhook(raw: unknown, signature: string): Promise<WebhookEvent> {
    const event = this.stripe.webhooks.constructEvent(
      raw as string,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    return WebhookEventSchema.parse({
      id: event.id,
      type: event.type,
      data: event.data.object,
    });
  }
} 