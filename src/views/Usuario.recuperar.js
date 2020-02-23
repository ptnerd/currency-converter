import React, { useState } from 'react';
import Navbar from './../components/navbar';
 

function UsuarioRecuperar() {
    const [email, setEmail] = useState();
    const [msg, setMsg]     = useState();

    function recuperarSenha(){
        console.log('apertou recuperar', email);
    }

    return (
        <>
            <Navbar />

            <form className="text-center form-login mx-auto mt-5">
                <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>

                <input onChange={ (e) => setEmail(e.target.value) } type="email" className="form-control my-2" placeholder="email" />

                <div className="msg my-4 text-center">
                    <span>{msg}</span>
                </div>

                <button type="button" className="btn btn-lg btn-block btn-enviar" onClick={recuperarSenha}>Recuperar Senha</button>
            </form>


        </>
    )
}

export default UsuarioRecuperar;