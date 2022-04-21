import React from 'react'

export const FilterExpense = ({ filter, setFilter }) => {
  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className="campo">
                <label htmlFor="category">Filtrar Gastos</label>
                <select
                    name="category"
                    id="category"
                    value={ filter }
                    onChange={ e => setFilter(e.target.value) }
                >
                    <option value="">-- Toda las Categorías --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="salud">Salud</option>
                    <option value="ocio">Ocio</option>
                    <option value="varios">Gastos Varios</option>
                </select>
            </div>
        </form>
    </div>
  )
}
