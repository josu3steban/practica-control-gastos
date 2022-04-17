import { useState } from 'react';
import { Header } from './components/ui/Header'

const App = () => {

  const [budget, setBudget] = useState(0);
  
  return (
    <div>

      <Header
        budget    = {budget}
        setBudget = {setBudget}
      />

    </div>
  )
}

export default App