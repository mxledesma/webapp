import React, { useEffect, useState } from 'react'
import { getExpenses } from '../services/expense-service';
import { Expense } from '../model/Expense.';

// A custom Hook to render in all components or if something is called serveral times
const useExpenses = () => {

    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [error, setErrors] = useState(null);
    const [isLoading, setLoader] = useState(false);
  
  
    useEffect(() => {
      // API call to the backend
      setLoader(true);
        getExpenses().then((response) => {setExpenses(response.data)
        })    // this setLoader(false) not necessary in the success state
        .catch((error) => setErrors(error.message))
        .finally(() => setLoader(false));
    
    }, [] ); // called once array empty

    return {expenses, error, isLoading};


}

export default useExpenses

