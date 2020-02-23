import React,{useState,useEffect  } from 'react';
import { Link, Redirect           } from "react-router-dom";


function Login() {
    const [email, setEmail]     = useState();
    const [senha, setSenha]     = useState();
    const [msgTipo, setMsgTipo] = useState();

     
    useEffect( () =>{
        setEmail('eventos@eventos.com');
        setSenha('123456');
    },[]);

    function logar(){
        
        console.log('apertou o logar', email);

    }
          

    return (
        <div className="login-content d-flex aling-items-center">

            <form className="form-signin mx-auto">
                
                <i class="fas fa-chess text-white fa-5x d-flex justify-content-center my-3"></i>
                <h1 className="h3 mb-3 font-weight-bold text-white text-center">Login</h1>

                <input onChange={(e) => setEmail(e.target.value)} type="email"    id="inputEmail"    class="form-control my-2" placeholder="Email" value={email && email}  />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" value={senha && senha}  />

                <button className="btn btn-lg btn-block btn-login" type="button" onClick={logar}>Acessar</button>

                <div className="msg-login text-white text-center my-4 text-center">
                    {msgTipo === 'sucesso' && <span><strong>Wow</strong> Voce esta conectado &#128526; </span> }
                    {msgTipo === 'erro'    && <span><strong>Ops</strong> Verifique se a senha ou usuario estao corretos &#128533; </span> }
                </div>

                <div className="opcoes-login mt-5">
                    <Link to="/recuperar"   className="mx-2">Recuperar Senha</Link>
                    <span className="text-white">&#9733;</span>
                    <Link to='/novousuario' className="mx-2">Cadastrar</Link>
                    <span className="text-white">&#9733;</span>
                    <Link to='/' className="mx-2">Home</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
