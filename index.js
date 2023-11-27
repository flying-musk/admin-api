const functions = require("@google-cloud/functions-framework");

const enableCors = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
};

functions.http("login", (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    console.log(req.body, username, password);
    res.status(200).json({ success: true, message: "Login successful" });
  } else {
    res.status(405).send("Method Not Allowed");
  }
});

functions.http("money", (req, res) => {
  enableCors(req, res);

  console.log("enter", req.method, req.body);

  res.status(200).json({ success: true, message: "get money successful" });

  // if (req.method === "POST") {
  //   console.log(req.body);

  //   res.status(200).json({ success: true, message: "get money successful" });
  // } else {
  //   res.status(405).send("Method Not Allowed");
  // }
});

functions.http("getData", (req, res) => {
  res.send("getData success");
});
