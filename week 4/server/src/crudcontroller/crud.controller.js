const get = (model) => async (req, res) => {
    const item = await model.find().lean().exec();
    res.status(200).json({ item });
}
const post = (model) => async (req, res) => {
    const item = await model.create(req.body);
    res.status(201).json({ item });
}

const getOne = (model) => async (req, res) => {
    const item = await model.find(req.params.id).lean().exec();
    res.status(200).json({ item });
}

module.exports = {
    get,
    post,
    getOne
}