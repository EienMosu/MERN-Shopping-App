const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const passport = require("passport");
const passportSetup = require("./passport");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection is Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cookieSession({
    name: "session",
    keys: ["ozkan"],
    // One Day
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  // {
  //   origin: "https://reverent-beaver-92a886.netlify.app",
  //   methods: "GET, POST, PUT, DELETE",
  //   credentials: true,
  // }
  cors()
);


app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Back-End Server is Alive on ${process.env.PORT}`);
});
