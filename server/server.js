const express = require("express")
const app = express()
const cors = require("cors")



//---MIDDLEWARE ---
app.use(express.json(), express.urlencoded({ extended: true }), cors())

require("dotenv").config()
require("./config/mongoose.config")

const port = process.env.PORT
// need to replace routes
require("./routes/store.routes")(app)




app.listen(port, () => console.log(`🌴🌴🌴🌴 Listening on port: ${port}`));