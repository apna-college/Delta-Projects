import { useState } from "react";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

const RAZORPAY_KEY_ID = process.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_XXXXXXXXXXXXXXXXXX";

function Product() {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); 
  const [paymentDetails, setPaymentDetails] = useState(null);

  // Product details
  const productName = "Solid Blue Cotton T-Shirt";
  const amountInRupees = 5; 
  const amountInPaise = amountInRupees * 100; 
  const currency = "INR";
  const receiptId = `receipt_${Date.now()}`;

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!RAZORPAY_KEY_ID) {
      alert(
        "Razorpay Key ID is not set. Add REACT_APP_RAZORPAY_KEY_ID to client/.env"
      );
      return;
    }

    if (typeof window.Razorpay === "undefined") {
      alert(
        "Razorpay SDK failed to load. Check your internet connection and try again."
      );
      return;
    }

    setLoading(true);
    setPaymentStatus(null);

    try {
      const orderResponse = await fetch(`${API_BASE}/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountInPaise,
          currency,
          receipt: receiptId,
        }),
      });

      if (!orderResponse.ok) {
        const errData = await orderResponse.json().catch(() => ({}));
        throw new Error(errData.error || "Order creation failed on server");
      }

      const order = await orderResponse.json();
      console.log("Order created:", order.id);

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,       
        currency: order.currency,   
        name: "Acme Corp",
        description: "Test Payment",
        image: "/logo192.png",       
        order_id: order.id,         
        handler: async function (response) {
          console.log("Payment response from Razorpay:", response);
          try {
            const validateResponse = await fetch(`${API_BASE}/order/validate`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const validateData = await validateResponse.json();

            if (!validateResponse.ok) {
              console.error("Validation failed:", validateData);
              setPaymentStatus("failed");
              setPaymentDetails({ error: validateData.msg || "Signature mismatch" });
              return;
            }

            console.log("Payment validated:", validateData);
            setPaymentStatus("success");
            setPaymentDetails({
              orderId: validateData.orderId,
              paymentId: validateData.paymentId,
            });
          } catch (validateErr) {
            console.error("Validation error:", validateErr);
            setPaymentStatus("failed");
            setPaymentDetails({ error: "Could not verify payment" });
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9876543210",
        },
        notes: {
          address: "Acme Corp Office",
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            console.log("Checkout dismissed by user");
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        setPaymentStatus("failed");
        setPaymentDetails({
          error: response.error.description || "Payment failed",
          code: response.error.code,
        });
        setLoading(false);
      });

      rzp.open();
    } catch (err) {
      console.error("Payment handler error:", err);
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product">
      <h2>T-Shirt</h2>
      <p>{productName}</p>
      <p>
        <strong>₹{amountInRupees}</strong>
      </p>

      <button onClick={paymentHandler} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>

      {paymentStatus === "success" && paymentDetails && (
        <div className="payment-result success">
          <h3>Payment Successful!</h3>
          <p>Order ID: {paymentDetails.orderId}</p>
          <p>Payment ID: {paymentDetails.paymentId}</p>
        </div>
      )}

      {paymentStatus === "failed" && paymentDetails && (
        <div className="payment-result failed">
          <h3>Payment Failed</h3>
          <p>{paymentDetails.error}</p>
        </div>
      )}
    </div>
  );
}

export default Product;
