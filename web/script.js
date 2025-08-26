const amountGrid = document.getElementById('amountGrid');
const customAmountInput = document.getElementById('customAmount');
const quantityInput = document.getElementById('quantity');
const buyButton = document.getElementById('buyButton');
const errorEl = document.getElementById('error');

let selectedAmountCents = null;

amountGrid.addEventListener('click', (e) => {
	const btn = e.target.closest('button[data-amount]');
	if (!btn) return;
	[...amountGrid.querySelectorAll('button')].forEach(b => b.removeAttribute('aria-selected'));
	btn.setAttribute('aria-selected', 'true');
	selectedAmountCents = parseInt(btn.dataset.amount, 10);
});

buyButton.addEventListener('click', async () => {
	try {
		errorEl.hidden = true;
		let amountCents = selectedAmountCents;
		const customDollars = customAmountInput.value.trim();
		if (!amountCents && customDollars) {
			const dollars = parseInt(customDollars, 10);
			if (!isFinite(dollars) || dollars <= 0) throw new Error('Enter a valid custom amount');
			amountCents = dollars * 100;
		}
		if (!amountCents) throw new Error('Select or enter an amount');
		const qty = Math.max(1, parseInt(quantityInput.value || '1', 10));

		buyButton.disabled = true;
		buyButton.textContent = 'Redirecting…';

		const res = await fetch('/api/create-checkout-session', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				amountCents,
				productName: 'Gift Card',
				quantity: qty,
				successUrl: `${location.origin}/success.html`,
				cancelUrl: `${location.origin}/cancel.html`
			})
		});
		if (!res.ok) throw new Error('Server error');
		const data = await res.json();
		if (data.url) {
			location.href = data.url;
		} else {
			throw new Error('Invalid checkout response');
		}
	} catch (err) {
		errorEl.textContent = err.message || 'Something went wrong';
		errorEl.hidden = false;
	} finally {
		buyButton.disabled = false;
		buyButton.textContent = 'Buy gift card';
	}
});