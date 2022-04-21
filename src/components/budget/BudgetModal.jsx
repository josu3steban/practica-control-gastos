import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import CloseButton from '../../assets/img/cerrar.svg';

export const BudgetModal = ({ setModal, animateModal, budgetList, setAnimateModal, setBudgetList, editExpense, setEditExpense, budget }) => {

    const [ formValue, setFormValue ] = useState({
        budgetName: '',
        budgetAmount: '',
        budgetCategory: '',
    });

    const handleInputChange = ({ target }) => {

        setFormValue({
            ...formValue,
            [target.name]: (target.name==='budgetAmount') ? Number(target.value) : target.value
        });
        
    }

    const idGenerate = () => {
        return Math.random().toString(36) + Date.now().toString(36);
    }

    useEffect( () => {

        if( Object.keys( editExpense ).length > 0 ) {

            setFormValue({
                budgetName: editExpense.budgetName,
                budgetAmount: editExpense.budgetAmount,
                budgetCategory: editExpense.budgetCategory,
            })
        }
    }, []);

    const handleSubmit = (e) => {

        e.preventDefault();

        if( !!formValue.budgetName && !!formValue.budgetAmount && !!formValue.budgetCategory ) {

            const newBudget = {
                budgetName: formValue.budgetName,
                budgetAmount: formValue.budgetAmount,
                budgetCategory: formValue.budgetCategory,
                budgetDate: Date.now()
            }

            const totalSpend = budgetList.reduce( (total, item ) => total + item.budgetAmount, 0 );

            const totalWithoutThis = totalSpend - editExpense.budgetAmount;

            console.log(totalWithoutThis);

            if( !!editExpense.id ) {

                if( (totalWithoutThis + newBudget.budgetAmount) > budget ) {

                    Swal.fire({
                        title: 'Ups, Te Has Pasado!',
                        text: `La cantidad del gasto $${newBudget.budgetAmount} supera el presupuesto.
                        La cantidad máxima disponible para este gasto es de: $${budget - totalWithoutThis}`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });

                    return;

                } else {

                    const newEditBudget = budgetList.map( ( budget ) => {

                        if( budget.id === editExpense.id ) {
    
                            newBudget.id = editExpense.id;
    
                            return newBudget;
                        } else {
    
                            return budget;
                        }
                    });
    
                    setBudgetList( newEditBudget );
                    setEditExpense({});
                }

            } else {

                if( (totalSpend + newBudget.budgetAmount) > budget ) {
                        
                    Swal.fire({
                        title: 'Ups, Te Has Pasado!',
                        text: `La cantidad del gasto ${newBudget.budgetAmount} supera el presupuesto.
                        Tu presupuesto disponible es de ${budget - totalSpend}`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                    return;
                } else {

                    newBudget.id = idGenerate();

                    setBudgetList([
                        ...budgetList,
                        newBudget
                    ]);
                }
            }

            console.log('TODOS LOS CAMPOS SON CORRECTOS');

            setAnimateModal(false);
            setTimeout( () => {
                setModal(false);
            }, 500);
            
        }else {

            console.log('DATOS INCORRECTOS')

            Swal.fire('Error', 'Ingrese los datos correctos', 'error');

        }

    }

    const handleCloseModal = () => {

        setEditExpense({});
        
        setAnimateModal(false);

        setTimeout( () => {
            setModal(false);
        }, 500);
    };
    
    return(
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={ CloseButton }
                    alt="cerrar modal"
                    onClick={ handleCloseModal }
                />
            </div>
            
            <form
                className={`formulario ${ animateModal ? 'animar' : 'cerrar' }`}
                onSubmit = { handleSubmit}
            >
                <legend>{ editExpense.id ? 'Editar Gasto' : 'Nuevo Gasto' }</legend>

                <div className="campo">
                    <label htmlFor="budgetName">Nombre</label>

                    <input
                        type="text"
                        name="budgetName"
                        id="budgetName"
                        placeholder='Nombre del Gasto'
                        value={ formValue.budgetName }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="campo">
                    <label htmlFor="budgetAmount">Cantidad</label>

                    <input
                        type="number"
                        name="budgetAmount"
                        id="budgetAmount"
                        placeholder='Cantidad del gasto'
                        value={ formValue.budgetAmount }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="campo">
                    <label htmlFor="budgetCategory">Categoría</label>

                    <select 
                        name="budgetCategory"
                        id="budgetCategory"
                        value={ formValue.budgetCategory }
                        onChange={ handleInputChange }
                    >
                        <option value="">-- Elegir Categoría --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="salud">Salud</option>
                        <option value="ocio">Ocio</option>
                    </select>
                </div>

                <input type="submit" value={ editExpense.id ? 'Actualizar Gasto' : 'Agregar Gasto' } />
            </form>
        </div>
    );
};