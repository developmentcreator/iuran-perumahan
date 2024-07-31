const express = require("express");
const app = express();
const db = require("./config/db");
const homeRoutes = require("./routes/homeRoutes");
const residentRoutes = require("./routes/residentRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

app.use(express.json());
app.use("/homes", homeRoutes);
app.use("/residents", residentRoutes);
app.use("/payments", paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
