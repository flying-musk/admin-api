const { faker } = require("@faker-js/faker");

const members = Array.from({ length: 640 }, () => {
  return {
    mbid: faker.string.nanoid(10),
    name: faker.person.fullName(),
    amtout: Math.floor(Math.random() * 4001),
    amtin: Math.floor(Math.random() * 4001),
    transfer: Math.floor(Math.random() * 4001),
    bal: Math.floor(Math.random() * 4001),
  };
});
console.log(members);

module.exports = (req, res) => {
  if (req.method === "OPTIONS") {
    res.status(204).send("");
  } else if (req.method === "POST") {
    const { action } = req.body;
    if (action === "all") {
      const response = {
        code: 1,
        data: {
          sum: { Bal: 1235, Total_in: 1236, Total_out: 1237, Total_trans: 1238 },
          detail: members,
        },
        msg: "get all money",
      };
      res.status(200).json(response);
    } else if (action === "individual") {
      res.status(200).json({ success: true, message: "get individual money" });
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
