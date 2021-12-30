
const express = require("express");
const router = express.Router()
const User = require("../models/user.model")
router.get("", async (req, res) => {
    const user = await User.find().lean().exec();
    return res.status(200).send({ user })
})
router.delete("/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).send( {users:user} );
})
module.exports = router;