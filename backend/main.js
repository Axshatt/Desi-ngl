const express =  require("express")
const { userRoute } = require("../routes/userRoute")
const { adminRoute } = require("../routes/adminRoute")
const app = express()
app.use(express.json())


app.use("/api/v1",userRoute)

app.use("/api/v1/admin",adminRoute)


app.listen(3000)
