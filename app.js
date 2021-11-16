const express = require("express");
const app = express();
const port = 3000;
const data = require("./data");

app.get("/", (req, res, next) => {
  const filters = req.query;
  const filteredClinics = data.filter((clinics) => {
    let isFiltered = true;
    for (key in filters) {
      isFiltered = isFiltered && clinics[key] == filters[key];
    }
    return isFiltered;
  });
  res.send(filteredClinics);
});

app.listen(3000, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
