const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = 1337;

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const data = [
  {
    domain: "udit.sites.localdomain",
    id: 1,
  },
  {
    domain: "venom.sites.localdomain",
    id: 2,
  },
  {
    domain: "box.sites.localdomain",
    id: 3,
  },
  {
    domain: "hello.sites.localdomain",
    id: 4,
  },
  {
    domain: "test.sites.localdomain",
    id: 5,
  },
  {
    domain: "you",
    id: 6,
  },
];

app.get("/", (req, res) => {
  let domain = new URL(req.headers.origin);
  domain = domain.hostname;
  const dataObj = data.find((d) => d.domain === domain);
  console.log(domain, typeof domain);
  if (dataObj?.id) {
    res.status(200).json({ id: dataObj.id });
  } else {
    res.status(200).json({ id: null });
  }
});

app.listen(PORT, () =>
  console.log("Backend server is running! at" + " " + PORT)
);
