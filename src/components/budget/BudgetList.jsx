import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatDate } from "../../assets/helpers/helpers";
import IconoAhorro from "../../assets/img/icono_ahorro.svg";
import IconoComida from "../../assets/img/icono_comida.svg";
import IconoCasa from "../../assets/img/icono_casa.svg";
import IconoSalud from "../../assets/img/icono_salud.svg";
import IconoOcio from "../../assets/img/icono_ocio.svg";


export const BudgetList = ({ listItem, setEditExpense, deleteExpense }) => {

    const { id, budgetName:name, budgetAmount:amount, budgetCategory:category, budgetDate: date } = listItem;
    
    const iconDictionay = {
        ahorro: IconoAhorro,
        comida: IconoComida,
        casa: IconoCasa,
        salud: IconoSalud,
        ocio: IconoOcio
    }

    const leadingActions = () => (

        <LeadingActions>
            <SwipeAction
                onClick={ () => setEditExpense( listItem ) }
            >
                Editar
            </SwipeAction>
        </LeadingActions>
        
    );

    const trailingActions = () => (

        <TrailingActions>
            <SwipeAction
                onClick={ () => deleteExpense( listItem.id ) }
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
        
    );

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={ leadingActions() }
            trailingActions={ trailingActions() }
        >
            <div className="gasto sombra">
                
                <div className="contenido-gasto">

                    <img
                        src={ iconDictionay[category] }
                        alt="icono de categoria"
                    />
                    
                    <div className="descripcion-gasto">
                        <p className="categoria"> { category } </p>

                        <p className='nombre-gasto'>{ name }</p>

                        <p className='fecha-gasto'>Agregado el: <span>{ formatDate( date ) }</span></p>
                    </div>
                </div>

                <p className="cantidad-gasto">{amount}</p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}
