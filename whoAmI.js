const whoAmI = (req, res) => {
  res.json({
    ipaddress: req.headers["x-forwarded-for"].split(",")[0],
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
};
module.exports = whoAmI;
