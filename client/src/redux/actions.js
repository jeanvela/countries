import axios from 'axios'

export const getCountries = () => {
    return async function(dispatch) {
        let response = await axios.get('http://localhost:3001/countries') // coneccion entre el front y el back
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: response.data // Guardado todo la info de la base de dato en payload
        })
    }
}

export const filterContinent = (payload) => {
    return {
        type:'FILTER_BY_CONTINENT',
        payload
    }
}

export const ascOdesc = (payload) => {
    return {
        type:'FILTER_BY_ALPHABETICAL',
        payload
    }
}

export const filterPopulation = (payload) => {
    return {
        type:'FILTER_BY_POPULATION',
        payload
    }
}

export const getCountryDeatil = (id) => {
    return async function(dispatch) {
        let response = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type: 'COUNTRY_DETAIL',
            payload: response.data
        })
    }
}

export const getNameCountries = (name) => {
    return async (dispatch) => {
        try {
            let response = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: 'GET_NAME_COUNTRIES',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
        
    }
}

export const createActivity = (payload) => {
    return async () => {
        let response = await axios.post('http://localhost:3001/activities',payload) // * En esta ruta voy hacer el post del payload
        return response
    }
}


export const getAllActivities = () => {
    return async (dispatch) => {
        let response = await axios.get('http://localhost:3001/activities')
        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: response.data
        })
    } 
    
}