import React from 'react'
import { BudgetControl } from './BudgetControl'
import { NewBudgetForm } from './NewBudgetForm'

export const BudgetControlContainer = ( { budget, setBudget, isValidBudget, setIsValidBudget } ) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">

      {
        isValidBudget
        ?
        (
          <BudgetControl 
            budget = { budget }
            setBudget = { setBudget }
            setIsValidBudget = { setIsValidBudget }
          />
        )
        :
        (
          <NewBudgetForm
            budget      = { budget }
            setBudget   = { setBudget }
            setIsValidBudget = { setIsValidBudget }
          />
        )
        
      } 
        
    </div>
  )
}
