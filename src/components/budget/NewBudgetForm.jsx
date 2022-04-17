import React from 'react'

export const NewBudgetForm = ( { budget, setBudget } ) => {

    const handleSubmit = ( e ) => {
        
        e.preventDefault();
        
        const valueToNumber = Number(budget);

        if( !!valueToNumber && (valueToNumber>=0) ) {

            console.log('Dato Correcto');

        } else {

            console.log('Dato incorrecto')
        }
    }
    
  return (
    <div className='contendor-presupuesto contenedor sombra'>
        
        <form className='formulario' onSubmit={ handleSubmit }>
            <div className='campo'>

                <label htmlFor="budget">Definir Presupuesto</label>
                <input
                    type="text"
                    id='budget'
                    name='budget'
                    className='nuevo-presupuesto'
                    placeholder='Ingrese su presupuesto'
                    value={ budget }
                    onChange = { (e) => setBudget( e.target.value ) }
                />

            </div>

            <input
                type='submit'
                value='Ingresar'
            />
        </form>

    </div>
  )
}
