import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


const CurrencyDropDown = ({currencySelected}) => {
    const { loading } = useContext(GlobalContext);
    const { currencies } = useContext(GlobalContext);

     
    return (
        <>
            <select className="form-control" id="inputGroupSelect02" name="currencyTo" value={currencySelected}>
            {loading
                ? (<option value="0">Carregando</option>)
                : currencies.map((currency,index) => (<option key={index} value={currency}>{currency}</option>))
             }
            </select>

         
        </>
    )
}

export default CurrencyDropDown;