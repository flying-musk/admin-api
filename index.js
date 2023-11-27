const functions = require("@google-cloud/functions-framework");
const handleMoney = require("./endpoints/money");

const enableCors = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
};

functions.http("login", (req, res) => {
  enableCors(req, res);
  if (req.method === "OPTIONS") {
    res.status(204).send("");
  } else if (req.method === "POST") {
    res.status(200).json({ success: true, message: "login successful" });
  } else {
    res.status(405).send("Method Not Allowed");
  }
});

functions.http("money", (req, res) => {
  enableCors(req, res);
  handleMoney(req, res);
});
