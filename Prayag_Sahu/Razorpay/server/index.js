const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/order", async (req, res) => {
  try {
    const { amount, currency = "INR", receipt } = req.body;

    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return res.status(400).json({ error: "Invalid or missing amount" });
    }
    if (!receipt) {
      return res.status(400).json({ error: "Missing receipt" });
    }

    const razorpay = new Razorpay({
      key_id: "rzp_test_S2EJCNjJGivfLw",
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: Number(amount), 
      currency,
      receipt,
    };

    console.log("Creating order with options:", options);
    const order = await razorpay.orders.create(options);
    console.log("Order created:", order.id);

    res.json(order);
  } catch (err) {
    console.error("ORDER CREATION ERROR:", err);
    res.status(500).json({ error: "Order creation failed", details: err.message });
  }
});

app.post("/order/validate", (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: "Missing payment verification fields" });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      console.warn("Signature mismatch for order:", razorpay_order_id);
      return res.status(400).json({ msg: "Transaction is not legitimate!" });
    }

    console.log("Payment verified successfully:", razorpay_payment_id);
    res.json({
      msg: "Payment verified successfully",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (err) {
    console.error("VALIDATION ERROR:", err);
    res.status(500).json({ error: "Validation failed", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
