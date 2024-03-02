import { createContext, useState } from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {
    const [ datos, setDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [ error, setError ] = useState('')
    const [ resultado, setResultado ] = useState(0)
    const [ cargando, setCargando ] = useState(false)


    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        // base
        let resultado = 2000

        // Get years' diferences
        const diferencia = obtenerDiferenciaYear(datos.year)
        // substract 3% per every year
        resultado = resultado - (resultado * (diferencia * .03))

        // American add 15%
        // European add 30%
        // Asian 5%
        resultado = resultado * calcularMarca(datos.marca)

        // basic plan add 20%
        // full plan add 50%

        resultado *= calcularPlan(datos.plan)
        resultado = formatearDinero(resultado)
        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        },1000)
        

    }

    return (
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext