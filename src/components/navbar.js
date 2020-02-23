import React     from 'react';
import { Link }  from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
import './navbar.css';

function Navbar(){
    // const dispatch = useDispatch();
    function sair(){
        // dispatch({type: 'LOG_OUT' }); // tipo combinado la no switch do usuarioReducer
    }
    return(
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brandtext-white font-weight-bold text-white"><i className="fas fa-money-check-alt text-white fa-1x text-center mr-3"></i>Currency Converter - </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    <li className="nav-item"><Link className="nav-link" to="/" >Home </Link></li>

                    {/* {
                        useSelector( state => state.usuarioLogado) > 0 ?
                        <>
                            <li className="nav-item"><Link className="nav-link" to="/eventocadastro" >Publicar Eventos </Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/eventos/meus"   >Meus Eventos </Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#" onClick={sair}>Sair </Link></li>
                        </>
                        :
                        <>
                            <li className="nav-item"><Link className="nav-link" to="/novousuario"   >Cadastrar </Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/login"         >Login </Link></li>
                        </>


                    } */}

                    <li className="nav-item"><Link className="nav-link" to="/novousuario"   >Cadastrar </Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login"         >Login </Link></li>
                       
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;