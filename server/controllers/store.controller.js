// the controller does the CRUD for the DB
// import the model here
const Store = require("../models/store.model")

module.exports ={

// READ ALL
findAllStores : (req, res) => {
Store.find()
        .then((allStores) => {
            console.log(">>>Store.find()  >>>", allStores)
            res.status(200).json(allStores)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
},

// READ ONE 
findOneStore : (req, res) => {
Store.findOne({ _id: req.params.id })
        .then(oneSinglStore => {
            res.status(200).json(oneSinglStore)
        })
        .catch(err => {
            res.status(400).json(err)
        })
},


// CREATE 
createNewStore : (req, res) => {
Store.create(req.body)
        .then((oneStore) => {
            console.log(">>>Store.create()= >>>", oneStore)
            res.status(200).json(oneStore)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
},

// UPDATE
updateExistentStore : (req, res) => {
Store.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateStore => {
            res.status(200).json(updateStore)
        })
        .catch(err => {
            res.status(400).json(err)
        })
},



// DELETE
deleteAnExistingStore : (req, res) => {
Store.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
}