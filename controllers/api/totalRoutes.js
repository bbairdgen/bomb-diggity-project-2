//to do
const router = require('express').Router()
const { Total } = require('../../models')
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
        const newTotal = await Total.create( {
            ...req.body, 
            user_id: req.session.user_id,
        });
        res.status(200).json(newTotal)
    } catch (err) {
        res.status(400).json(err);
    }
})