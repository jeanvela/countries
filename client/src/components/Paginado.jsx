import style from './Paginado.module.css'

// * lo que resivo por parametro me los traigo del otro componente
const Paginado = ({countriesPerPage,allCountries,paginado}) => {
    // ! declaro un arreglo vacio
    const pageNums = []

    // ? recorro el nummero redondo que resulte de dividir todos los paises por los paises por pagina que quiero
    // ? de aqui sale las lista de los numeros por paginado que muestro
    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        // * ese numero lo pusheo en mi array
        pageNums.push(i)
    }
    return (
        <div>
            <ul className={style.paginado}>
                { // ! si tengo pageNums entonces lo mapeo y  que me devuelva cada uno de los numeros que me devuelva el paginado
                    pageNums && pageNums.map(num => {
                        return (
                            // <div key={num}>
                                <button className={style.btn_paginado} onClick={() => paginado(num)}>{num}</button>
                            //* </div> */}
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Paginado