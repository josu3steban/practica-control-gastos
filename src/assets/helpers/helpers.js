

export const idGenerator = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export const formatDate = (date) => {
    const newDate = new Date(date);

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    
    return newDate.toLocaleDateString('es-ES', options);
}

export const formattedBudget = ( budget ) => {

    return budget.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

}