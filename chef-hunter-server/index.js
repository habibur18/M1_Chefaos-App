const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const chef = require("./data/chef.json");
const allChefDetails = require("./data/chefDetails.json");
const menu = require("./data/menu.json");
app.get("/", (req, res) => {
  res.send("server home");
});

app.get("/chef/v1", (req, res) => {
  res.send(chef);
});

app.get("/allchef/v1", (req, res) => {
  res.send(allChefDetails);
});

app.get("/chef/v1/:id", (req, res) => {
  const id = req.params.id;
  const introChef = chef.find((c) => c.id == id);
  res.send(introChef || "[{Not Found}]");
});

app.get("/allchef/v1/id/:id", (req, res) => {
  const id = req.params.id;
  const chefDetailsById = allChefDetails.find((details) => details.id == id);
  res.send(chefDetailsById);
});

// for chefdetails with chefId
app.get("/allchef/v1/chefid/:chefid", (req, res) => {
  const id = req.params.chefid;
  const chefDetailsByChefId = allChefDetails.find(
    (details) => details.chef_id == id
  );
  res.send(chefDetailsByChefId);
});

// menu details
app.get("/menu/v1", (req, res) => {
  res.send(menu);
});
app.get("/menu/v1/id/:id", (req, res) => {
  const id = req.params.id;
  const menuDetailsById = menu.find((m) => m.id == id);
  res.send(menuDetailsById || "[{Not Found}]");
});
app.listen(port, () => {
  console.log("server is running");
});
