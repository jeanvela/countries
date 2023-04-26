import { Link } from "react-router-dom"
import style from './Landing.module.css'
import Loader from "../components/Loader"
import { useState, useEffect } from "react"

const Landing = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    },[])

    return (
        <div className={style.container}>
            {loading && <Loader/>}
            {
                !loading && <div className={style.container__landing}>
                    <h1>Bienvenidos</h1>
                    <h2>Listo para conocer todos los paises</h2>
                    <Link to='/Home'>
                        <button className={style.btn}>Ingresar...</button>
                    </Link>
                    </div>
            }
        </div>
    )
}

export default Landing