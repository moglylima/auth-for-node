
const authorized = (roleRequired) => (req, res, next) => {
    const userRole = req.user.role;
    if (roleRequired !== userRole) {
        return res.status(403).json({ message: 'You are not authorized to access this resource' });
    }
    next();
}

export default authorized;