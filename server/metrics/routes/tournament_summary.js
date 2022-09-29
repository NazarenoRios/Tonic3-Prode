const express = require("express");
const router = express.Router();
const { get_json_data, get_prop_index } = require("../utils/routes_utils");

router.get("/", (req, res) => {
  try {
    const file = get_json_data("phase_participants_summary");
    res.status(200).send(file);
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", (req, res) => {
  try {
    const file = get_json_data("users_histogram");
    const user_data_ix = get_prop_index(req.params.id, "userId", file);
    console.log(user_data_ix)
    if (!user_data_ix && user_data_ix !== 0) return res.sendStatus(404);
    return res.status(200).send(file[user_data_ix]);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
