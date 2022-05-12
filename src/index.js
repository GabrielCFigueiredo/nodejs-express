import * as  express from 'express'
import userController from "./controller/userController"
import postController from "./controller/postController"
const app = express()



app.use("/user", userController)
app.use("/post", postController)

app.listen(3000)