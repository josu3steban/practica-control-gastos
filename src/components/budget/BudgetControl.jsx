

export const BudgetControl = ( { budget } ) => {

    const formattedBudget = budget.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
        });
    
    return(

        <div className="dos-columnas-v2">

            <div className="">
                Grafica circular
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> { formattedBudget }
                </p>
                <p>
                    <span>Disponible: </span> { formattedBudget }
                </p>
                <p>
                    <span>Gastado: </span> { formattedBudget }
                </p>
            </div>


        </div>
        
    );
}