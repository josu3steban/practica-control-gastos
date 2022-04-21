import React from 'react'
import { BudgetControlContainer } from '../budget/BudgetControlContainer'

export const Header = ( { budget, setBudget, isValidBudget, setIsValidBudget, budgetList, setBudgetList } ) => {
  return (

    <header>

        <h1 className='font-titulo'>
            Control de Gastos
        </h1>

        <BudgetControlContainer
            budget      = { budget }
            setBudget   = { setBudget }
            isValidBudget = { isValidBudget }
            setIsValidBudget = { setIsValidBudget }
            budgetList = { budgetList }
            setBudgetList = { setBudgetList }
        />
        
    </header>
    
  )
}
