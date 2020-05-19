const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.json({ status: "home" });
});

router.get("/async", async (req, res) => {
  const data = await fetchDataFromDb();
  res.json({ status: data });
});

function fetchDataFromDb() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data is here");
    }, 2000);
  });
}

module.exports = router;
