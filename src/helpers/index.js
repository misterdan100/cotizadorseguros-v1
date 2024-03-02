export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}

export function calcularMarca(marca) {
    let incremento

    // switch(marca) {
    //     case '1': 
    //         incremento = 1.30
    //         break
    //     case '2': 
    //         incremento = 1.15
    //         break
    //     case '3': 
    //         incremento = 1.05
    //         break
    //     default:
    //         break
    // }

    const multiplicador = {
        '1': 1.30,
        '2': 1.15,
        '3': 1.05,
    }

    return multiplicador[marca]
}

export function calcularPlan(plan) {
    return plan === '1' ? 1.20 : 1.50
}

export function formatearDinero(cantidad) {
    return cantidad.toLocaleString('en-us', {
        style: 'currency',
        currency: 'USD',
    })
}