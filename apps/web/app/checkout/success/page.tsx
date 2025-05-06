import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="container mx-auto py-12">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold">Thank You for Your Order!</h1>
          <p className="text-gray-500 dark:text-gray-400">
            We've received your filing request and will begin processing it
            immediately. You'll receive an email confirmation with your order
            details and next steps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 space-x-4"
        >
          <Button asChild>
            <a href="/dashboard">View Dashboard</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/">Return Home</a>
          </Button>
        </motion.div>
      </div>
    </main>
  );
} 