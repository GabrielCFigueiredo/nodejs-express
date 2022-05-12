import { Router } from "express";
import { signup } from "./userService";


const router = Router()

router.post('/signup', (req, res) => {
  try {

    const answer = signup(req.body)
    res.send(answer)
  } catch (error) {
    if (error.message === "email_existent")
      return res.status(400).send(error.message)
      
    res.status(500).send(error.message)
  }
  
  })
  
router.post('/login', (req, res) => {
    res.status(201).send("LOGIN")
  })

export default router