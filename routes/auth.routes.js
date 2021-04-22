const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()


// /api/auth/register
router.post(
    '/register',
    [

        check('password', 'Min length is 6 symbols')
            .isLength({min: 6})
    ],
    async (req, res) => {
        try {
            // console.log('Body:', req.body)

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data'
                })
            }

            const {login, password} = req.body

            const candidate = await User.findOne({ login })

            if (candidate) {
                return res.status(400).json({message: 'This user is already exist'})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({login, password: hashedPassword})

            await user.save()

            res.status(201).json({message: 'User was created'})

        } catch (e) {
            res.status(500).json({message: 'Something wet wrong, try again'})
        }
    })

// /api/auth/login
router.post(
    '/login',
    [
        // check('login', 'Enter your login').exists(),
        check('password', 'Enter your password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data'
                })
            }

            const {login, password} = req.body

            const user = await User.findOne({ login })

            if (!user) {
                return res.status(400).json({message: 'User not found'})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (isMatch) {
                return res.status(400).json({message: 'Incorrect password'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: 'Something wet wrong, try again'})
        }
    })


module.exports = router
