import React from 'react'
import { BudgetControl } from './BudgetControl'
import { NewBudgetForm } from './NewBudgetForm'

export const BudgetControlContainer = ( { budget, setBudget, isValidBudget, setIsValidBudget, budgetList, setBudgetList } ) => {
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
            budgetList = { budgetList }
            setBudgetList = { setBudgetList }
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
