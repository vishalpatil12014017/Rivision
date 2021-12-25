
const express = require('express');

const router = express.Router();
const Student = require('../models/student.model');
router.get("", async (req, res) => {
    const students = await Student.find().lean().exec()
    res.status(200).json({ students });
})
router.post("/", async (req, res) => {
    const student = await Student.create(req.body)
    res.status(201).json({ student });
})

// fetch all students who gave a particular evaluation
router.get("/:id", async (req, res) => {
    const student = await Student.find({ "evaluationId": req.params.id }).populate("userId").populate("evaluationId").lean().exec()
    return res.status(200).json({ student })
})

//fetch the student with his personal details who scored the highest mark in the evaluation
router.get("/marks/:id", async (req, res) => {
    const student = await Student.findOne({ "evaluationId": req.params.id }).sort({ "marks": -1 }).limit(1).populate("userId").populate("evaluationId").lean().exec()
    return res.status(200).json({ student })
})
module.exports = router;