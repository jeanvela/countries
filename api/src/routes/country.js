const Router = require('express');
const findAllCountries = require('../controllers/findAllCountries')
const findCountryById = require('../controllers/findCountryById')

const router = Router()

router.get('/countries', async (req,res) => {
    const {name} = req.query
    try {
        const countries = name ? await findAllCountries({name}) : await findAllCountries()
        res.status(200).json(countries)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


router.get('/countries/:id', async (req,res) => {
    const { id } = req.params
    try {
        const country = await findCountryById(id)
        res.status(200).json(country)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports= router