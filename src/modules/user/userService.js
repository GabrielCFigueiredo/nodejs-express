import { sign } from "jsonwebtoken"

let users = []

const generateAccessToken = (data) => sign(data, "secret")

const getUserByEmail = (searchEmail) => users.find((obj) => obj.email === searchEmail)


export const signup = (data) => {
    if (getUserByEmail(data.email)) throw new Error('email_existent')
    
    users.push(data)
    return generateAccessToken({email: data.email})
}

export const login = (data) => {
    const user = getUserByEmail(data.email)
    if (!user) throw new Error("Email nao encontrado")

    if (user.password !== data.password) throw new Error("Senha incorreta")

    return generateAccessToken({ email: data.email })
}