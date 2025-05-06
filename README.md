# Entity Filer

A modern platform for business entity formation and compliance management.

## Features

- Multi-step entity formation wizard
- Dynamic pricing calculator
- Secure payment processing with Stripe
- Real-time order tracking
- Compliance calendar and reminders
- Multi-state support
- Dark mode support

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** Tailwind CSS + shadcn/ui
- **State:** Zustand
- **Forms:** React Hook Form + Zod
- **Database:** Supabase
- **Payments:** Stripe
- **Testing:** Vitest + Playwright
- **Monorepo:** Turborepo + pnpm

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+
- Supabase account
- Stripe account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/entity-filer.git
   cd entity-filer
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Copy the environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Update the environment variables with your credentials:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_APP_URL`

5. Start the development server:
   ```bash
   pnpm dev
   ```

### Development

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests
- `pnpm type-check` - Run TypeScript checks

### Deployment

The web app is configured for deployment on Vercel. Click the button below to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fentity-filer)

## Project Structure

```
entity-filer/
├─ apps/
│  ├─ web/          # Next.js web app
│  ├─ mobile/       # Expo mobile app
│  └─ docs/         # Nextra documentation
├─ packages/
│  ├─ ui/           # Shared UI components
│  ├─ config/       # Shared configurations
│  ├─ db/           # Database types and client
│  ├─ sdk/          # Domain logic and adapters
│  └─ scripts/      # CLI utilities
└─ README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 