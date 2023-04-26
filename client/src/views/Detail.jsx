import { React, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCountryDeatil } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import style from './Detail.module.css'
import Loader from "../components/Loader"

const CountryDetail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const country = useSelector(state => state.detail)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        dispatch(getCountryDeatil(id))
        setTimeout(() =>{
            setLoading(false)
        },3000)
    },[dispatch,id])

    return(
        <div className={style.container}>
            <div>
                <Link to='/home'>
                    <button className={style.btn}>Volver</button>
                </Link>
            </div>
            <div className={style.pa__ac}>
                {loading && <Loader/>}
                {
                    !loading && <><div className={style.container_card}>
                            <span className={style.codigo}>Codigo: {country.id}</span>
                            <h2 className={style.nom_pais}>{country.name}</h2>
                            <img className={style.img} src={country.flags} alt={country.name} />
                            <h3 className={style.continent}>Continente: {country.continent}</h3>
                            <span className={style.info}>Capital: {country.capital}</span>
                            {country.subregion ? <p className={style.info}>Subregion: {country.subregion}</p> : null}
                            {country.area ? <p className={style.info}>Area: {country.area}</p> : null}
                            <span className={style.info}>Poblacion: {country.population}</span>
                    </div>
                    {
                        country.Activities ? country.Activities.map(e => {
                            return (
                                <div className={style.container__activities}>
                                    <h2>Actividad</h2>
                                    <h3>Nombre: {e.name}</h3>
                                    <span>Dificultad: {e.difficulty}</span>
                                    <span>Duracion: {e.duration}hs</span>
                                    <span>Estacion: {e.season}</span>
                                </div>
                            )
                        }) : null
                    }
                    </>
                }
            </div>
        </div>
    )
}

export default CountryDetail