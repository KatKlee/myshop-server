import { userLogin } from "../services/userService.js"
import { createToken } from "../util/token.js"

export const login = async (req, res) => {
    /* console.log(req.body) */
    // fill object with data from request body
    const user = req.body
    // get result from email check
    const result = await userLogin(user)
    // if password matches
    if (result.password === user.password) {
        // get token with the password from user with matching id
        const token = createToken({ user: result._id })
        // response with the token
        res.status(200).json({ token: token })
    } else {
        res.status(500).json({ message: 'Fehler beim Anmelden' })
    }

}