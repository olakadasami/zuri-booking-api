const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();
// middleware
app.set("trust proxy", true);
app.use((req, res, next) => {
  console.log(req.method, "request made");
  console.log(req.path);
  next();
});
app.use(json());

app.get("/", (req, res) => {
  res.json("Hello from App Engine!");
});
app.use("/flights", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
