import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { usePricingStore } from "@/store/pricing";

const formSchema = z.object({
  entityType: z.enum(["llc", "corporation", "nonprofit"]),
  state: z.string().min(2, "Please select a state"),
  employees: z.coerce.number().min(1, "Must have at least 1 employee"),
  annualRevenue: z.coerce.number().min(0, "Revenue cannot be negative"),
});

type FormValues = z.infer<typeof formSchema>;

export function PricingCalculator() {
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const calculatePrice = usePricingStore((state) => state.calculatePrice);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      entityType: "llc",
      state: "",
      employees: 1,
      annualRevenue: 0,
    },
  });

  function onSubmit(data: FormValues) {
    const price = calculatePrice(data);
    setEstimatedPrice(price);
  }

  return (
    <div className="w-full max-w-2xl space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="entityType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Entity Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select entity type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="llc">LLC</SelectItem>
                    <SelectItem value="corporation">Corporation</SelectItem>
                    <SelectItem value="nonprofit">Non-Profit</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="de">Delaware</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employees"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Employees</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="annualRevenue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Annual Revenue</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Calculate Price
          </Button>
        </form>
      </Form>

      {estimatedPrice !== null && (
        <div className="rounded-lg border p-4 text-center">
          <h3 className="text-lg font-semibold">Estimated Price</h3>
          <p className="text-3xl font-bold">${estimatedPrice.toFixed(2)}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is an estimate based on your inputs
          </p>
        </div>
      )}
    </div>
  );
} 