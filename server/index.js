import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';
let stripe = null;
if (stripeSecretKey) {
	// Lazy import to avoid error if key missing
	const stripeModule = await import('stripe');
	stripe = new stripeModule.default(stripeSecretKey);
}

app.post('/api/create-checkout-session', async (req, res) => {
	try {
		const { amountCents, productName, quantity, successUrl, cancelUrl } = req.body || {};
		if (!amountCents || amountCents < 100 || !productName) {
			return res.status(400).json({ error: 'Invalid request' });
		}

		if (!stripe) {
			// Mock response for environments without Stripe key set
			return res.json({ id: 'sess_mock_123', url: successUrl || '/success.html?mock=1' });
		}

		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			line_items: [
				{
					price_data: {
						currency: 'usd',
						product_data: {
							name: productName,
						},
						unit_amount: amountCents,
					},
					quantity: quantity || 1,
				},
			],
			success_url: successUrl || 'http://localhost:5173/success.html',
			cancel_url: cancelUrl || 'http://localhost:5173/cancel.html',
		});

		return res.json({ id: session.id, url: session.url });
	} catch (error) {
		console.error('Checkout session error', error);
		return res.status(500).json({ error: 'Server error' });
	}
});

app.use(express.static(path.join(__dirname, '..', 'web')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});