// Stripe payment routes

const express = require("express");
const stripe = require("../config/stripeConfig");

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items,
      success_url: "https://yourfrontend.com/success",
      cancel_url: "https://yourfrontend.com/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
