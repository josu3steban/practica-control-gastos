import React from 'react'
import { BudgetList } from './BudgetList'

export const BudgetListContainer = ({ budgetList, setEditExpense, deleteExpense, filter, filteredList }) => {
  return (
    <div className='listado-gastos contenedor'>
        {
          !!filter ?
          (

            <>

              <h2>{ filteredList.length ? 'Listado de Gastos' : 'No Hay Gastos Con Esta Categoria'}</h2>
            
                {
                  filteredList.map( (listItem) => (
                    <BudgetList
                        key = { listItem.id }
                        listItem = { listItem }
                        setEditExpense = { setEditExpense }
                        deleteExpense = { deleteExpense }
                    />
                  ))
                }
            </>

          ) : (

              <>

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
              </>

          )
          
            
        }
    </div>
  )
}
