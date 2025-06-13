const express =  require("express")
const { userRoute } = require("../routes/userRoute")
const { adminRoute } = require("../routes/adminRoute")
const app = express()
app.use(express.json())


app.use("/",userRoute)

app.use("/admin",adminRoute)


app.listen(3000)
