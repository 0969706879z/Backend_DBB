const Category = require('../models/Category')
const { notifyEvent } = require('../function/notify')

exports.list = async (req, res) => {
    try {
        const category = await Category.find({}).exec()
        res.send(category)
    } catch (err) {
        res.status(500).send("Server Error !!!")
    }
}

exports.create = async (req, res) => {
    try {
        const { name } = req.body
        const category = await new Category({ name }).save()
        res.send(category)
        notifyEvent("Create Category : " + name + " Success")
    } catch (err) {
        res.status(500).send("Server Error !!!")
    }
}

exports.read = async (req, res) => {
    try {
        const id = req.params.id
        const category = await Category.findOne({ _id: id })
        res.send(category)
    } catch (err) {
        res.status(500).send("Server Error !!!")
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const { name } = req.body
        const category = await Category.findOneAndUpdate({ _id: id }, { name: name })
        res.send(category)
        notifyEvent("Update Category : " + name + " Success")
    } catch (err) {
        res.status(500).send("Server Error !!!")
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findOne({ _id: id });

        if (!category) {
            return res.status(404).send("Category not found");
        }

        await Category.findOneAndDelete({ _id: id });
        res.send(category);
        notifyEvent("Update Category ID : " + id + " Success")
    } catch (err) {
        res.status(500).send("Server Error!!!");
    }
};
