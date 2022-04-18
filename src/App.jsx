import { useState } from 'react';
import { Header } from './components/ui/Header';
import NewItemIcon from './assets/img/nuevo-gasto.svg';

const App = () => {

  const [budget, setBudget] = useState(0);
  const [ isValidBudget, setIsValidBudget ] = useState(false);
  
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
            />
          </div>
        )
      }
      

    </div>
  )
}

export default App