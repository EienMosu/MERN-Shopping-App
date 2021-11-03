const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51JpJhnHOXuntsXzl5WvbhODyrrrXVk7r12TH5nFR9BKnUpyqggOeByEwfrd9hPREjXh3pFF6DIM0mSJXajkERRVC002ZzB6Obx"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
