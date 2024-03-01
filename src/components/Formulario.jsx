import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"

const Formulario = () => {
  return (
    <>
        <form>
            <div className="my-5">
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Marca
                </label>
                <select
                    name='marca'
                    className='w-full p-3 bg-white border border-gray-200'
                >
                    <option value="">-- Selecciona Marca --</option>
                    {MARCAS?.map( marca => (
                        <option
                            key={marca.id}
                            value={marca.id}
                        >{marca.nombre}</option>
                    ))}

                </select>
            </div>

            <div className="my-5">
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Anio:
                </label>
                <select
                    name='marca'
                    className='w-full p-3 bg-white border border-gray-200'
                >
                    <option value="">-- Selecciona Anio --</option>
                    {YEARS?.map( year => (
                        <option
                            key={year}
                            value={year}
                        >{year}</option>
                    ))}

                </select>
            </div>

            <div className="my-5 items-center">
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Elije un Plan:
                </label>
                <div className="flex gap-3">
                    {PLANES?.map( plan => (
                        <Fragment
                            key={plan.id}
                        >
                            <label>
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio"
                                name="plan"
                                value={plan.id}
                            
                            />
                        </Fragment>
                    ))}
                </div>
            </div>

            <input 
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 transition-all text-white cursor-pointer font-bold uppercase p-3 rounded-lg hover:shadow-lg"
                value="cotizar"
            />

        </form>
    </>
  )
}

export default Formulario