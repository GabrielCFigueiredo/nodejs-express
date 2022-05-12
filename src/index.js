import * as  express from 'express'
import userController from "./modules/user/userController"
import postController from "./modules/post/postController"


const app = express()
app.use(express.json())


app.use("/user", userController)
app.use("/post", postController)


app.listen(3000)