import { useEffect, useState } from 'react';
import { Header } from './components/ui/Header';
import NewItemIcon from './assets/img/nuevo-gasto.svg';
import { BudgetModal } from './components/budget/BudgetModal';
import { BudgetListContainer } from './components/budget/BudgetListContainer';
import Swal from 'sweetalert2';

const App = () => {

  //Controla el presupuesto que se ingresa
  const [budget, setBudget] = useState("");

  // Validacion del presupuesto ingresado
  const [ isValidBudget, setIsValidBudget ] = useState(false);

  //Validacion si el modal está activo o no
  const [ modal, setModal ] = useState(false);

  //Controla la animacion del formulario del modal
  const [ animateModal, setAnimateModal ] = useState(false);

  //Listado de los gatos ingresados
  const [ budgetList, setBudgetList ] = useState([]);

  //Contola el gasto a editar
  const [ editExpense, setEditExpense ] = useState({});

  //Si se desliza para editar, el effect compruab si hubo modificacion el esatdo de ditar y abre el modal
  useEffect( () => {
    if( Object.keys( editExpense ).length > 0 ) {

      setModal(true);

      setTimeout( () => {

        setAnimateModal(true);

      }, 500)
      
    }
  }, [editExpense]);

  //Cargar del localStorage
  useEffect( () => {
      
      const budgetLS = Number( localStorage.getItem('budget') );
      const expenseLS = JSON.parse( localStorage.getItem('listExpense') );

      if( !!budgetLS ) {
  
        setBudget( budgetLS );
        setIsValidBudget(true);
        setBudgetList( expenseLS );
      } else {

        // setBudget( budgetLS );

        // setIsValidBudget(true);
      }
  }, []);

  //Guardar en el localStorage
  useEffect( () => {

    localStorage.setItem('budget', budget);
    localStorage.setItem('listExpense', JSON.stringify(budgetList));
  }, [budgetList]);
  
  //Abre el modal presionando predeterminado
  const handleModal = () => {

    const totalExpense = budgetList.reduce( ( total, budget ) => total + budget.budgetAmount, 0);

    if( totalExpense === budget ) {

      Swal.fire({
        title: 'Ups!',
        text: 'Ya no puedes agregar más gastos, has alcanzado tu límite',
        icon: 'warning'
      })
    } else {

      //Limpia el state de editar  para que no se quede en el estado anterior y salngan en los campos del formulario
      setEditExpense({});
      
      setModal(true);

      setTimeout( () => {
        setAnimateModal(true);
      }, 500);
    }
  };

  const deleteExpense = ( id ) => {

    const newList = budgetList.filter( ( budget ) => budget.id !== id );

    setBudgetList( newList );
  }
  
  return (
    <div className={ modal ? 'fijar' : '' }>

      <Header
        budget    = {budget}
        setBudget = {setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
        budgetList = {budgetList}
        setBudgetList = {setBudgetList}
      />

      {
        isValidBudget
        &&

        
        (
          <>
            <main>
              <BudgetListContainer
                budgetList = { budgetList }
                setEditExpense = { setEditExpense }
                deleteExpense = { deleteExpense }
              />
            </main>

            {/* {Boton pa abri el modal} */}
            <div className="nuevo-gasto">
              <img
                src={NewItemIcon}
                alt="icono nuevo gasto"
                onClick={handleModal}
              />
            </div>
          </>
        )
      }
      
      {
        modal
        &&
        (
          <BudgetModal
            budget = { budget }
            setModal = {setModal}
            animateModal = {animateModal}
            setAnimateModal = {setAnimateModal}
            budgetList = {budgetList}
            setBudgetList = { setBudgetList }
            editExpense = { editExpense }
            setEditExpense = { setEditExpense }
          />
        )
      }

    </div>
  )
}

export default App