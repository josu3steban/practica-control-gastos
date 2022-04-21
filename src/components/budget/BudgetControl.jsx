import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Swal from "sweetalert2";

import { formattedBudget } from "../../assets/helpers/helpers";


export const BudgetControl = ( { budget, setBudget, budgetList, setBudgetList, setIsValidBudget } ) => {

    // const formattedBudget = budget.toLocaleString('en-US', {
    //     style: 'currency',
    //     currency: 'USD'
    //     });

    //Controla los gastado
    const [ spend, setSpend ] = useState(0);

    //Controla lo disponible
    const [ remaining, setRemaining ] = useState( budget );

    //Controlar el porcentaje de la grafica
    const [ percent, setPercent ] = useState(0);

    const handleResetApp = () => {

        Swal.fire({
            title: '¿Restear Aplicación?',
            text: "Esto eliminara todos los datos!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, resetear!',
            cancelButtonText: 'Cancelar'

        }).then((result) => {
            if (result.isConfirmed) {

                setBudget(0);
                setBudgetList([]);

                localStorage.setItem('budget', 0);
                localStorage.setItem('listExpense', JSON.stringify([]));

                setIsValidBudget(false);

                Swal.fire(
                    'Reseteado!',
                    'Todo se ha reseteado.',
                    'success'
                )

            }
                
        })
        
    }


    useEffect( () => {

        const totalSpend = budgetList.reduce( ( accumulator, budget ) => budget.budgetAmount + accumulator, 0 );

        const totalRemaining = budget - totalSpend;

        //Calcular el porcentaje
        const newPercent = ( ( totalSpend * 100 ) / budget ).toFixed(2);
        
        setSpend( totalSpend );
        setRemaining( totalRemaining );

        setTimeout( () => {
            setPercent( newPercent );
        }, 1000);
        
    }, [ budgetList ] );
    
    return(
        <div className="dos-columnas-v2">

            <div className="">

                <CircularProgressbar
                    styles={ buildStyles({
                        pathColor: '#3b82f6',
                        textColor: '#3b82f6',
                    })}

                    value={percent}
                    text={`${percent}% Gastado`}
                />
                
            </div>

            <div className="contenido-presupuesto">
                <button
                    className="reset-app font-texto"
                    type="button"
                    onClick={ handleResetApp }
                >
                    Resetear App
                </button>
                
                <p className="centrar-texto">
                    <span>Presupuesto: </span> { formattedBudget( budget ) }
                </p>
                <p className="centrar-texto">
                    <span>Disponible: </span> { formattedBudget( remaining ) }
                </p>
                <p className="centrar-texto">
                    <span>Gastado: </span> { formattedBudget( spend ) }
                </p>
            </div>

        </div>
        
    );
}