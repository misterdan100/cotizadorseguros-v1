import { useCallback, useMemo, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constants'

const Resultado = () => {
    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos
    const yearRef = useRef(year)

    const [nombreMarca] = useCallback(MARCAS.filter( m => m.id === +marca ), [resultado]) 
    const [nombrePlan] = useCallback(PLANES.filter( p => p.id === +plan), [resultado])

    if(resultado === 0) return null

  return (
    <div className='bg-gray-100 text-center p-5 mt-5 shadow rounded-xl'>
        <h2 className='text-gray-600 font-black text-3xl'>Resumen</h2>

        <p className='my-2'>
            <span className='font-bold'>Marca: </span>
            {nombreMarca.nombre}
        </p>

        <p className='my-2'>
            <span className='font-bold'>Año: </span>
            {yearRef.current}
        </p>

        <p className='my-2'>
            <span className='font-bold'>Plan: </span>
            {nombrePlan.nombre}
        </p>

        <p className='my-2 text-2xl'>
            <span className='font-bold'>Total de cotizacion: </span>
            {resultado}
        </p>


    </div>
  )
}

export default Resultado