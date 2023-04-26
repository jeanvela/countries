import { Link } from "react-router-dom"
import style from './countriesCarsds.module.css'
import { useState, useEffect } from "react"
import Loader from "./Loader"

const CountriesCards = ({id,flags,name,continent}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    },[])

    return (
        <Link to={`/countries/${id}`} className={style.link}>
            <div className={style.container}>
                {loading && <Loader/>}
                {
                    !loading && <>
                        <img className={style.img} src={flags} alt={name} width='250px' height='250px' />
                        <h2 className={style.h2}>{name}</h2>
                        <h3 className={style.h3}>{continent}</h3>
                    </>
                }
            </div>
        </Link>
    )
}

export  default CountriesCards