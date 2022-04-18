import { useState } from 'react';
import { Header } from './components/ui/Header';
import NewItemIcon from './assets/img/nuevo-gasto.svg';
import { BudgetModal } from './components/budget/BudgetModal';

const App = () => {

  const [budget, setBudget] = useState(0);
  const [ isValidBudget, setIsValidBudget ] = useState(false);
  const [ modal, setModal ] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  
  return (
    <div>

      <Header
        budget    = {budget}
        setBudget = {setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
      />

      {
        isValidBudget
        &&
        (
          <div className="nuevo-gasto">
            <img
              src={NewItemIcon}
              alt="icono nuevo gasto"
              onClick={handleModal}
            />
          </div>
        )
      }
      
      {
        modal
        &&
        (
          <BudgetModal
            setModal = {setModal}
          />
        )
      }

    </div>
  )
}

export default App