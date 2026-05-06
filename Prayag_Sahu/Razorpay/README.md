# Razorpay Payment Integration — Fixed & Production-Ready

## Tech Stack
- **Frontend**: React (Create React App)
- **Backend**: Node.js + Express
- **Payments**: Razorpay
- **No database** (stateless demo — add MongoDB/PostgreSQL as needed)

---

## Project Structure
```
project/
├── client/          # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── Product.js      ← main payment component
│   ├── public/
│   │   └── index.html      ← Razorpay SDK script tag here
│   └── .env.example
└── server/
    ├── index.js            ← Express API
    ├── package.json
    └── .env.example
```

---

## 1. Setup — Server

```bash
cd server
npm install
cp .env.example .env
```

Edit `server/.env`:
```
PORT=5000
RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXXXXXX
RAZORPAY_SECRET=your_razorpay_secret_key
CLIENT_URL=http://localhost:3000
```

> Get your keys from: https://dashboard.razorpay.com/app/keys

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

---

## 2. Setup — Client

```bash
cd client
npm install
cp .env.example .env
```

Edit `client/.env`:
```
REACT_APP_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXXXXXX
REACT_APP_API_URL=http://localhost:5000
```

> ⚠️ Only the KEY_ID goes here — never the secret!

```bash
npm start
```

---

## 3. Payment Flow (end-to-end)

```
User clicks "Pay Now"
  → Frontend POSTs /order to backend with { amount (paise), currency, receipt }
  → Backend creates Razorpay order, returns { id, amount, currency, ... }
  → Frontend opens Razorpay Checkout with order_id
  → User completes payment
  → Razorpay calls handler() with { razorpay_order_id, razorpay_payment_id, razorpay_signature }
  → Frontend POSTs /order/validate to backend
  → Backend verifies HMAC-SHA256 signature using the secret
  → Backend returns success/failure
  → Frontend shows result to user
```

---

## 4. Test Cards (Razorpay Test Mode)

| Card Number          | CVV | Expiry   |
|----------------------|-----|----------|
| 4111 1111 1111 1111  | any | any future date |
| 5267 3181 8797 5449  | any | any future date |

UPI Test: `success@razorpay`

---

## 5. What Was Fixed

| # | Issue | Fix |
|---|-------|-----|
| 1 | `server/index.js` was 100% commented out | Cleaned up and kept only the working code |
| 2 | `RAZORPAY_KEY_ID` hardcoded as `rzp_test_xxxxxxxxxxxx` in `Product.js` | Moved to `REACT_APP_RAZORPAY_KEY_ID` env var |
| 3 | No env check — server started silently without valid keys | Added startup validation log |
| 4 | `Popup.js` was broken (raw JSX outside a component, no export) | Removed and replaced with inline status UI in `Product.js` |
| 5 | No error handling on `fetch()` calls (would crash on non-2xx) | Added `response.ok` checks with proper error bubbling |
| 6 | No loading/disabled state on Pay button — double-click caused duplicate orders | Added `loading` state and `disabled` on button |
| 7 | `payment.failed` event not handled — user saw nothing on failure | Added `rzp.on("payment.failed", ...)` handler |
| 8 | `modal.ondismiss` not handled — `loading` spinner stuck if user closed modal | Added `ondismiss` to reset loading state |
| 9 | `receipt` used a static string — duplicate order IDs on repeated clicks | Changed to `receipt_${Date.now()}` |
| 10 | Express 5 used (`^5.1.0`) — breaking API changes vs Express 4 | Pinned to Express `^4.18.2` (stable) |
| 11 | `dotenv` version `^17.2.3` doesn't exist | Fixed to `^16.4.5` |
| 12 | CORS allowed all origins (`cors()` with no config) | Scoped to `CLIENT_URL` from env |
| 13 | No `amount` validation on backend — `0` or negative values passed | Added guard: `amount > 0` check |
| 14 | Validate route used sync code but no try/catch | Wrapped in try/catch |
| 15 | `API_BASE` hardcoded as `http://localhost:5000` | Reads from `REACT_APP_API_URL` env var |

---

## 6. Deployment Notes

### Backend (e.g. Render / Railway)
- Set all env vars in dashboard: `RAZORPAY_KEY_ID`, `RAZORPAY_SECRET`, `CLIENT_URL`, `PORT`
- Start command: `npm start`

### Frontend (e.g. Vercel / Netlify)
- Set env vars: `REACT_APP_RAZORPAY_KEY_ID`, `REACT_APP_API_URL` (your deployed backend URL)
- Build command: `npm run build`
- Publish directory: `build`

### Switch to Live Mode
1. In Razorpay Dashboard → switch to Live
2. Get new Live keys
3. Update `RAZORPAY_KEY_ID`, `RAZORPAY_SECRET` in server env
4. Update `REACT_APP_RAZORPAY_KEY_ID` in client env
5. Redeploy both
