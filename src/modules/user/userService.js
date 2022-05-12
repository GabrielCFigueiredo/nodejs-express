

let users = []

const getUserByEmail = (searchEmail) => users.find((obj) => obj.email === searchEmail)


export const signup = (data) => {
    if (getUserByEmail(data.email)) throw new Error('email_existent')
    
    users.push(data)
    return true
}