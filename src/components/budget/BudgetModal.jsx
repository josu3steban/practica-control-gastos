import CloseButton from '../../assets/img/cerrar.svg';

export const BudgetModal = ({ setModal }) => {

    const handleCloseModal = () => {
        setModal(false);
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
            
        </div>
    );
};