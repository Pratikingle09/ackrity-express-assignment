const validation = (req, res, next) => {
    const user_id = req.params.id;
    if (!user_id || isNaN(user_id)) {
        return res.status(400).json({ 'message': 'Bad request: Invalid or missing user ID' });
    }
    next();
};

module.exports=validation