const StoreController = require("../controllers/store.controller")


module.exports = app => {
    app.get("/api/stores",StoreController.findAllStores)
    app.get("/api/stores/:id",StoreController.findOneStore)
    app.patch("/api/stores/:id",StoreController.updateExistentStore)
    app.post("/api/stores/new",StoreController.createNewStore)
    app.delete("/api/stores/:id",StoreController.deleteAnExistingStore)
}