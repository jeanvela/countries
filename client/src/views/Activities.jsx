import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllActivities } from '../redux/actions'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from './Activities.module.css'
import Loader from '../components/Loader.jsx'
import axios from "axios"

const Activities = () => {
    const dispatch = useDispatch()
    const activities = useSelector(state => state.allActivities)
    const [loading, setLoading] = useState(true)

    const handleDelete = (id) => {
       axios.delete(`http://localhost:3001/activities/${id}`)
       .then(response => {
        const deleteItem = response.data
        dispatch(getAllActivities())
        alert(`Se elimino correctamente el elemento ${deleteItem}`)
       })
       .catch(error => {
            alert(`Hubi un error al intentar eliminar el elemento ${error}`)
       })
    }

    useEffect(() => {
        dispatch(getAllActivities())
        setTimeout(() => {
            setLoading(false)
        },3000)
    },[dispatch])

    return (
        <div className={style.container}>
            <div className={style.links}>
                <Link to='/home'>
                    <button className={style.btn}>Volver a Home</button>
                </Link>
                <Link to='/activities'>
                    <button className={style.btn}>Crear actividad</button>
                </Link>
            </div>
            {loading && <Loader/>}
            {
                !loading && <div className={style.box}>
                    {
                        activities.map(({id,name,difficulty,duration,season}) => {
                            return (
                                <div key={id} className={style.container_activities}>
                                    <span>{id}</span>
                                    <p>Actividad: {name}</p>
                                    <span>Dificultad: {difficulty}</span>
                                    <span>Duracion: {duration}</span>
                                    <span>Estacion del año: {season}</span>
                                    <button className={style.btn_delete} onClick={() => handleDelete(id)}>Eliminar</button>
                                </div>
                            )
                        })
                    }
                </div>
            }            
        </div>
    )
}

export default Activities