import React from 'react'
import { BudgetControlContainer } from '../budget/BudgetControlContainer'

export const Header = ( { budget, setBudget } ) => {
  return (

    <header>

        <h1 className='font-titulo'>
            Control de Gastos
        </h1>

        <BudgetControlContainer
            budget      = { budget }
            setBudget   = { setBudget }
        />
        
    </header>
    
  )
}
