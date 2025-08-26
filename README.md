# Mobile Gift Card Site

## Setup

1. Copy env:

```bash
cp .env.example .env
# Put your Stripe secret key in STRIPE_SECRET_KEY=
```

2. Install deps:

```bash
npm install
```

3. Run server (serves static web and API):

```bash
npm start
```

Open http://localhost:3000

- Without `STRIPE_SECRET_KEY`, the checkout endpoint returns a mock session and redirects to success page so you can test the flow.

## Development (optional)

Static assets live in `web/`. You can also run:

```bash
npm run dev
```

Then visit http://localhost:5173 but note the API runs on 3000; either proxy or open http://localhost:3000 for a unified experience.
