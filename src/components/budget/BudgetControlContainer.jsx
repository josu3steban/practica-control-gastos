import React from 'react'
import { NewBudgetForm } from './NewBudgetForm'

export const BudgetControlContainer = ( { budget, setBudget } ) => {
  return (
    <>

        <NewBudgetForm
            budget      = { budget }
            setBudget   = { setBudget }
        />
        
    </>
  )
}
