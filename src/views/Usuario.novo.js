import React,{useState} from 'react';
import { Link }         from "react-router-dom";

import Navbar from './../components/navbar';

function NovoUsuario(){

    const [email, setEmail]           = useState();
    const [senha, setSenha]           = useState();
    const [msgTipo, setMsgTipo]       = useState();
    const [msg, setMsg]               = useState();
    const [carregando, setCarregando] = useState(0);

    function cadastrar(){
        setMsgTipo(null);
        setCarregando(1);

        if(!email || !senha){
            setMsgTipo('erro');
            setMsg('Voce precisa informar email E senha  ');
            setCarregando(0);
            return; 
        }
        
        console.log('apertou para cadastrar: ', email);
    }

    return (
        <>
            <Navbar />
            <div className="form-login d-flex aling-items-center">    

                <form className="text-center mx-auto">
                    <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

                    <input onChange={(e) => setEmail(e.target.value)} type="email"    className="form-control my-2 " placeholder="Email" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2 " placeholder="Senha" />
                
                    {carregando 
                        ?<div class="spinner-border text-danger" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        :<button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro" onClick={cadastrar}>Cadastrar </button>
                    }
                    
                    <div className="msg-login text-black text-center my-4 text-center">
                        {msgTipo === 'sucesso' && <span><strong>Wow</strong> Usuario cadastrado com sucesso &#128526; </span> }
                        {msgTipo === 'erro'    && <span><strong>Ops</strong> {msg} &#128544; </span> }
                    </div>

                    <div className="opcoes-cadastro mt-5">
                        <Link to="/recuperar" className="mx-2">Recuperar Senha</Link>
                        <span className="text-black">&#9733;</span>
                        <Link to='/login'     className="mx-2">Login</Link>
                    </div>
                
                </form>
            </div>
        </>
    )

}

export default NovoUsuario;