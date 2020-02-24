import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios      from 'axios';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
    loading: false,
    currencies: []
}

// Create context 
export const GlobalContext = createContext(initialState);

// Provider compoenent 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions 
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function updateCurrencies(currencies) {
        console.log('rodei updateCurrencies');
        dispatch({
            type: 'UPDATE_CURRENCY_LIST',
            payload: currencies
        });
    }

    function getAPIdata(){
        dispatch({ type: 'LOADING_ON' });
        sleep(4000).then(()=>{
            console.log('aqui vem a parte do axio');

            //http://data.fixer.io/api/latest?access_key=17d4bb13faa2bdd72b9a611cf82f8fa0&format=1

            console.log('process.env.REACT_APP_FIXER_API_KEY='+process.env.REACT_APP_FIXER_API_KEY);

            axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FIXER_API_KEY}&format=1`)
            .then(res => {
                console.log(res.data);
                // this.setState({track_list:res.data.message.body.track_list });
                //Object.keys(data.rates)
                var moedas = Object.keys(res.data.rates);
                console.log('moedas', moedas);
                updateCurrencies(Object.keys(res.data.rates));
            })
            .catch( err => console.error(err))

            dispatch({ type: 'LOADING_OFF' });
        });
        

        
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        loading: state.loading,
        currencies: state.currencies,
        deleteTransaction,
        addTransaction,
        getAPIdata
    }}>
        {children}
    </GlobalContext.Provider>);
}



