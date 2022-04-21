import React from 'react'
import { BudgetList } from './BudgetList'

export const BudgetListContainer = ({ budgetList, setEditExpense, deleteExpense }) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{ budgetList.length ? 'Listado de Gastos' : 'No Hay Gastos Ingresados'}</h2>

        {
            budgetList.map( (listItem) => (
                <BudgetList
                    key = { listItem.id }
                    listItem = { listItem }
                    setEditExpense = { setEditExpense }
                    deleteExpense = { deleteExpense }
                />
            ))
        }
    </div>
  )
}
