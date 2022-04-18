import React, { useState } from 'react'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const NewBudgetForm = ( { budget, setBudget, setIsValidBudget } ) => {

    // const [ error, setError ] = useState( false );

    const handleSubmit = ( e ) => {

        e.preventDefault();

        if( !!budget && (budget>=0) ) {

            setIsValidBudget(true);

        } else {

            setIsValidBudget(false);
            Swal.fire({
                icon: 'error',
                title: 'ERROR',
                text: 'El presupuesto es incorrecto',   
            });

        }
    }
    
  return (
    <div className=''>
        
        <form className='formulario' onSubmit={ handleSubmit }>
            <div className='campo'>

                <label
                    htmlFor="budget"
                    className='font-texto'
                >Definir Presupuesto</label>

                <input
                    type="number"
                    id='budget'
                    name='budget'
                    className='nuevo-presupuesto'
                    placeholder='Ingrese su presupuesto'
                    value={ budget }
                    onChange = { (e) => setBudget( Number(e.target.value) ) }
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
