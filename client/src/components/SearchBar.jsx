import React from "react"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { getNameCountries } from "../redux/actions"
import style from './SearchBar.module.css'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [ name, setName] = useState('')

    const handlerInput = (event) => {
        event.preventDefault()
        setName(event.target.value) // aca voy a ir guardando lo que el usuario este escribiendo en mi estado local name
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(getNameCountries(name)) // name seria mi estado local, name le llegue a la action que va buscar por el back
        setName('')
    }

    return (
        <div className={style.container}>
            <input className={style.input} type="text" placeholder="ingrese un name" onChange={(e) => handlerInput(e)}/>
            <button className={style.btn} type="submit" onClick={e => handlerSubmit(e)}>
                <svg width="30" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8Zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6Z"></path>
                </svg>
            </button>
        </div>
    )
}

export default SearchBar