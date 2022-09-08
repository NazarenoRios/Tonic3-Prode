const express = require("express")
const router = express.Router()
const tournament = require("./tournament")
const team = require("./team")
const player = require("./player")
const award = require("./award")
const userRouter = require("./users");

router.use("/user", userRouter)
router.use("/tournament",tournament)
router.use("/team",team)
router.use("/player",player)
router.use("/award",award)

module.exports = router
