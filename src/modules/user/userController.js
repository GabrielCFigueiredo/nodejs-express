import { Router } from "express";
import { signup, login } from "./userService";


const AUTH_TOKEN_NAME = "authorization"

const router = Router()

router.post('/signup', (req, res) => {
  try {

    const token = signup(req.body)
    res.cookie(AUTH_TOKEN_NAME, token).status(201).send(token)
  } catch (error) {
    if (error.message === "email_existent")
      return res.status(400).send(error.message)
      
    res.status(500).send(error.message)
  }
  
  })
  
router.post('/login', (req, res) => {
  try {
    const token = login(req.body)
    res.cookie(AUTH_TOKEN_NAME, token).status(200).send(token)
  } catch (error) {
    if (error.message === "Email nao encontrado" || error.message === "Senha incorreta")
      return res.status(400).send(error.message)

    res.status(500).send()
    }
  
    
  })

export default router