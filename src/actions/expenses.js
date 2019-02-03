import uuid from 'uuid';

//ADD EXPENSE

export const addExpense = (
    {
     description = '',
     note = '',
     amount=0,
     createdAt=0
     } = {}
    ) => ({
     type: 'ADD_EXPENSE',
     expense:{
         id: uuid(),
         description,
         amount,
         createdAt 
     }
});

// EDIT EXPENSE

export const editExpense = ( id , updates ) => ({
    typeof: 'EDIT_EXPENSE',
    id,
    updates
}); 


//REMOVE EXPENSE

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

