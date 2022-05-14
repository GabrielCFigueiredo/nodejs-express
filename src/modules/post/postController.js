import { Router } from "express";
import { verifyAccessToken } from "../../utils/auth";
import { createPosts, getPosts } from "./postService";


const router = Router()

router.post('/', verifyAccessToken, (req, res) => {
  try {
    const post = createPosts(req.body, req.user)
    res.status(200).send(post)
  } catch (error) {
    res.status(500).send(error.message)
  }

})

router.get('/:id?', verifyAccessToken, (req, res) => {
  try {
    const post = getPosts(req.params.id)
    res.status(200).send(post)
  } catch (error) {
    if (error.message === "Post não encontrado")
      res.status(400).send(error.message)
    res.status(500).send(error.message)
  }

})

export default router