
const initialState = {
    countries: [], // Guardo toda la info de los paises de la base de datos en este array,(para mostart cunado se levante el componenete Holme)
    allCountries: [], // me hago una copia del estado que siempre tenga a todos los paises
    detail: {},
    allActivities: []
}

const rootReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
        return {
            ...state,
            countries: action.payload, // guardo todos los paises en mi state countries
            allCountries: action.payload // guardo todo los paises en mi estado allCountries
        }
        case 'FILTER_BY_CONTINENT':
            const allCountries = state.allCountries // cuando filtre siempre va hacer el arrglo que tiene todos los paises
            // filtro por lo que me llegue en action.payload 
            const continentFilter = action.payload === 'All' ? allCountries : allCountries.filter(e => e.continent === action.payload)
            return {
                ...state,
                countries: continentFilter // muestro lo que tengo en el array continentFilter
            }
        case 'FILTER_BY_ALPHABETICAL': 
            let sortAlphabetical = action.payload === 'asc' ? 
            state.countries.sort((a,b) => {
                if (a.name > b.name) return 1
                if (b.name > a.name) return -1
                return 0 // si son iguales los deja como esta
            }) : state.countries.sort(function (a,b) {
                if (a.name > b.name) return -1
                if (b.name > a.name) return -1
                return 0 // si son iguales los deja como esta
            })
            return {
                ...state,
                countries: sortAlphabetical
            }
        case 'FILTER_BY_POPULATION':
            let sortPopulation = action.payload === 'More' ?
            state.countries.sort((a,b) => {
                if (a.population > b.population) return 1
                if (b.population > a.population) return -1
                return 0
            }) : state.countries.sort((a,b) => {
                if (a.population > b.population) return -1
                if (b.population > a.population) return 1
                return 0
            })
            return {
                ...state,
                countries: sortPopulation
            }
        case 'COUNTRY_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case 'GET_NAME_COUNTRIES':
            return{
                ...state,
                countries: action.payload
            }
        case 'POST_ACTIVITY':
            return {
                ...state
            }
        case 'GET_ACTIVITIES':
            return {
                ...state,
                allActivities: action.payload
            }
        default:
        return {
            ...state
        }
    }
}

export default rootReducer