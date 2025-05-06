import { CheckoutForm } from "@/components/checkout-form";

export default function CheckoutPage() {
  return (
    <main className="container mx-auto py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold">Complete Your Filing</h1>
        <CheckoutForm />
      </div>
    </main>
  );
} 