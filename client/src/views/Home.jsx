import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountries, filterContinent, ascOdesc, filterPopulation } from "../redux/actions"
import { Link } from "react-router-dom"
import CountriesCards from '../components/CountriesCards'
import Paginado from "../components/Paginado"
import SearchBar from "../components/SearchBar"
import style from './Home.module.css'
import Footer from "../components/Footer"

const Home = () => {
    const dispatch = useDispatch() // Para dispachar las acciones.
    const allCountries = useSelector(state => state.countries)
    // lo mismo que hacer el mapstateProsp.
    // Traeme en esta constante todo lo que esta en el esta de countries.

    // * guardame en un estado local la pagina actual y la constante que me setee la pagina actual.
    const [currentPage,setCurrentPage] = useState(1)
    
    // * guardame 10 paises por pagina y una constante que me setee los 10 paises.
    const [countriesPerPage,setCountriesPerPage] = useState(10)

    // * Indice del ultimo personaje, la pagina actual por la cantidad de paises por pagina.
    const inLastCountry = currentPage * countriesPerPage

    // * indice del primer personaje, indice del ultimo personaje menos los personajes por pagina.
    const inFirstCountry = inLastCountry - countriesPerPage

    // * En esta constante guardo todos los paises que voy a tener en cada pagina.
    // * con el metodo slice tomamos un pedazo del array, con el indice del primer pais y el indice del ultimo pais.
    const currentCountries = allCountries.slice(inFirstCountry,inLastCountry)

    const [orden,setOrden] = useState('')

    const paginado = (pageNum) => {
        setCurrentPage(pageNum)
    }

    // Vamos a traernos del estado los paises cuando el componenrte se monta.
    // cunado el componente Home se monta traeme toda la info.
    useEffect(() => {
        // dispacho la accion pasandole getCountries()
        dispatch(getCountries())
    },[dispatch])

    // * creamos una funcion que me filtre por continentes
    const handlerFilterContinent = (event) => {
        // * hago dispacth de la action filterContinent para que resiva el valor de lo que quiero filtrar
        dispatch(filterContinent(event.target.value))
    }

    const handlerAscODesc = (event) => {
        event.preventDefault() // para que no se recargue la pagina cada que toco el boton.
        dispatch(ascOdesc(event.target.value)) // * despacho la accion de ordenamiento.
        setCurrentPage(1) // cuando hago el ordenamiento esto me setea la pagina en la primera
        setOrden(`Ordenado ${event.target.value}`) // * a ese estado local lo modifica para que desde el front haga el ordenamiento
        // ! sin eso no ordena 
    }

    const handlerPopulation = (event) => {
        event.preventDefault()
        dispatch(filterPopulation(event.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${event.target.value}`)
    }

    return (
        <>
            <nav className={style.navBar}>
                {/* <img className={style.img} src="../img/logo.png" alt=""/> */}
                <SearchBar/>
                <div className={style.navegacion}>
                    <Link to='/activities' className={style.link}>
                        <p className={style.links}>Crear actividad</p>
                    </Link>
                    <Link to='/activity' className={style.link}>
                        <p className={style.links}>Actividades</p>
                    </Link>
                </div>               
            </nav>
            <div className={style.Selects}>
                <div className={style.selec}>
                    <span>Buscar por continentes</span>
                    <select onChange={(e) => handlerFilterContinent(e)}>
                        <option value="All">All</option>
                        <option value="South America">South America</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europe</option>
                        <option value="North America">North America</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <div className={style.selec}>
                    <span>Buscar por orden alfabetico</span>
                    <select onChange={(e) => handlerAscODesc(e)}>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </div>
                <div className={style.selec}>
                    <span>Buscar por habitantes</span>
                    <select onChange={(e) => handlerPopulation(e)}>
                        <option value="More">More poblation</option>
                        <option value="Less">Less population</option>
                    </select>
                </div>               
            </div>
            <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
            />
            <div className={style.container}>
                <div className={style.container_cards}>
                    {// pregunto si hay curentCountries, si hay hago un map y renderizo lo que necesito del array en mi componente CountriesCards
                        currentCountries?.map(c => {
                            return(
                                <div>
                                    <CountriesCards
                                    key={c.id}
                                    id={c.id}
                                    flags={c.flags}
                                    name={c.name}
                                   continent={c.continent}
                                   />
                               </div> 
                           )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home