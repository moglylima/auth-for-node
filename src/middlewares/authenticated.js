import { jsonSecret } from "../config/jsonSecret.js";
import jsonwebtoken from "jsonwebtoken";

export const authenticated = (req, res, next) => {
    const authHeaders = req.headers.authorization

    if (!authHeaders) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    } else {

        try {
            const { id, name, email, role } = jsonwebtoken.verify(authHeaders.split(' ')[1], jsonSecret.secret);
            req.user = { id, name, email, role };
            next();

        } catch (error) {
            res.status(401).json({ message: 'Token is not valid' });
        }
    }
}