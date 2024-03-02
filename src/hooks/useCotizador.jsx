import  { useContext } from 'react'
import CotizadorProvider from '../context/CotizadorProvider'

const useCotizador = () => {

    return useContext(CotizadorProvider)
}

export default useCotizador