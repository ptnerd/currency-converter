import React,{useState, useEffect,useContext} from 'react';
import { Link }         from "react-router-dom";
import Navbar from '../components/navbar';
import CurrencyDropDown from '../components/currency-select';
import { GlobalContext } from '../context/GlobalState';


const Home = () => {
    const [email, setEmail]           = useState();
    const [senha, setSenha]           = useState();
    const [msgTipo, setMsgTipo]       = useState();
    const [msg, setMsg]               = useState();
    const [carregando, setCarregando] = useState(0);
    const { getAPIdata }              = useContext(GlobalContext);
    const { loading }                 = useContext(GlobalContext);

    function converter(){
        setMsgTipo(null);
        setCarregando(1);

        // if(!email || !senha){
        //     setMsgTipo('erro');
        //     setMsg('Voce precisa informar email E senha  ');
        //     setCarregando(0);
        //     return; 
        // }
        
        console.log('apertou para converter: ', email);
    }

    useEffect(() => {
        console.log('rodei rotina porque rodei o Home');
        getAPIdata();
    }, []);

    useEffect(() => {
        console.log('useEffect loading rodou loading='+loading);    
    }, [loading]);

    return (
        <>
            <Navbar />
            <div id="exchange" className="container mt-5">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-body shadow">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Amount" onChange={(e) => setEmail(e.target.value)}  />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">From</label>
                                        </div>
                                        <CurrencyDropDown currencySelected="EUR"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect02">To</label>
                                        </div>
                                        
                                        <CurrencyDropDown currencySelected="USD"/>
                                    </div>
                                    <div className="form-group">
                                        <input id="result" type="text" className="form-control" placeholder="Exchanged Value" />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span id="warning"></span>
                                         

                                        <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro" onClick={converter}>Exchange </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* <div className="form-login d-flex aling-items-center">    

                <form className="text-center mx-auto">
                    <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

                     
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2 " placeholder="Senha" />
                
                    {carregando 
                        ?<div className="spinner-border text-danger" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        :<button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro" onClick={converter}>Converter </button>
                    }
                    
                   
                
                </form>
            </div> */}
        </>
    )
}

export default Home;
