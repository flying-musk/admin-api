const { faker } = require("@faker-js/faker");

const members = Array.from({ length: 640 }, () => {
  return {
    mbid: faker.string.nanoid(10),
    name: faker.person.fullName(),
    amtout: Math.floor(Math.random() * 2001),
    amtin: Math.floor(Math.random() * 2001),
    transfer: Math.floor(Math.random() * 2001),
    bal: Math.floor(Math.random() * 2001),
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
          sum: {
            Bal: members.reduce((sum, item) => sum + item.bal, 0),
            Total_in: members.reduce((sum, item) => sum + item.amtin, 0),
            Total_out: members.reduce((sum, item) => sum + item.amtout, 0),
            Total_trans: members.reduce((sum, item) => sum + item.transfer, 0),
          },
          detail: members,
        },
        msg: `${members.length} records`,
      };
      res.status(200).json(response);
    } else if (action === "individual") {
      res.status(200).json({ success: true, message: "get individual money" });
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
