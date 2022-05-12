import { Router } from "express";

const router = Router()

router.post('/signup', (req, res) => {
    res.send("SIGNUP")
  })
  
router.post('/login', (req, res) => {
    res.status(201).send("LOGIN")
  })

export default router