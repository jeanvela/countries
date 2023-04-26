const Router = require('express')
const postActivities = require('../controllers/postActivities')
const findAllActivities = require('../controllers/findAllActivities')
const deleteActivity = require('../controllers/deleteActivity')

const router = Router()

router.post('/activities', async (req,res) => {
    const {name, difficulty, duration, season, countries} = req.body
    try {
        const newActivity = await postActivities({name, difficulty, duration, season, countries})
        res.status(200).json(newActivity)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/activities', async (req,res) => {
    try {
        const activities = await findAllActivities()
        res.status(200).json(activities)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.delete('/activities/:id', async (req,res) => {
    const {id} = req.params
    try {
        const delectAc = await deleteActivity(id)
        res.status(200).send('Eliminado con exito')
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router