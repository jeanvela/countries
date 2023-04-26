import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import { getCountries, createActivity} from '../redux/actions'
import style from './Form.module.css'
import validation from "../validation"
import Loader from '../components/Loader.jsx'

const Form = () => {
    const dispacth = useDispatch()
    const countries = useSelector(state => state.allCountries)
    const [loading, setLoading] = useState(true)

    // ! Me creo un estado con lo que voy a necesitar para crear una activity
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    const [errors, setErrors] = useState({
        name: '',
        difficulty: '',
        duration: '',
    })

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
        setErrors(validation({...input, [event.target.name]:event.target.value},errors))
    }

    const handleCheck = (event) => {
        if (event.target.checked) { // si el input esta chekeado pasale lo que esta check
            setInput({
                ...input,
                season: event.target.value
            })
        }
    }

    const handleSelect = (event) => {
        setInput({
            ...input,
            countries: [...input.countries,event.target.value]
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        dispacth(createActivity(input))
        if (!input.name || !input.difficulty || !input.duration) return alert('Faltan Completar datos')
        alert('Activity creada')
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: []
        })
    }

    useEffect(() => {
        dispacth(getCountries())
        setTimeout(() => {
            setLoading(false)
        },3000)
    },[dispacth])

    return (
        <div className={style.container}>
            <div className={style.links}>
                <Link to='/home'>
                    <button className={style.btn}>Volver a home</button>
                </Link>
                <Link to='/activity'>
                    <button className={style.btn}>Actividades</button>
                </Link>
            </div>            
            <form onSubmit={handleSubmit} className={style.form}>
                {loading && <Loader/>}
                {!loading && <>
                <div className={style.container_info}>
                    <div className={style.info}>
                        <label className={style.labels}>Nombre</label>
                        <input className={style.inputs} type="text" value={input.name} name='name' onChange={handleChange}/>
                    </div>                   
                    <p className={style.errors}>{errors.name}</p>
                </div>
                <div className={style.container_info}>
                    <div className={style.info}>
                        <label className={style.labels}>Dificultad</label>
                        <input className={style.inputs} type="text" value={input.difficulty} name='difficulty' onChange={handleChange}/>
                    </div>                   
                    <p className={style.errors}>{errors.difficulty}</p>
                </div>
                <div className={style.container_info}>
                    <div className={style.info}>
                        <label className={style.labels}>Duracion</label>
                        <input className={style.inputs} type="text" value={input.duration} name='duration' onChange={handleChange}/>
                    </div>                   
                    <p className={style.errors}>{errors.duration}</p>
                </div>
                <div className={style.checks}>
                    <div>
                        <p className={style.labels}>Estacion del año</p>
                    </div>
                    <div className={style.selects_container}>
                        <label>
                            <input type="checkbox" value='Summer' name="Summer" onChange={e => handleCheck(e)}/>
                            Summer
                        </label>
                        <label>
                            <input type="checkbox" value='Autumn' name="Autumn" onChange={e => handleCheck(e)}/>
                            Autumn
                        </label>
                        <label>
                            <input type="checkbox" value='Winter' name="Winter" onChange={e => handleCheck(e)}/>
                            Winter
                        </label>
                        <label>
                            <input type="checkbox" value='Spring' name="Spring" onChange={e => handleCheck(e)}/>
                            Spring
                        </label>
                    </div>
                    
                </div>
                <select onChange={e => handleSelect(e)}>
                    {
                        countries.map(e => {
                            return(
                                <option value={e.id}>{e.name}</option>
                            )
                        })
                    }
                </select>
                <button className={style.submit} type="submit" disabled={
                    errors.name || errors.difficulty || errors.duration
                    ? true : false
                    }>Crear</button>
                </>}
            </form>
        </div>
        
    )
}

export default Form