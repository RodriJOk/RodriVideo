import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions/index'
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.css'
import PropTypes from 'prop-types'
 
const Header = (props) => {
    console.log({props})
    const {user} = props;
    const handleLogout = ()=>{
        props.logoutRequest({})
    }
    console.log({user})
    //object.key permite saber si un objeto tiene elementos de clave: valor
    //Esto va a retornar un array con las key que tiene ese objeto
    //Y como devuelve un array podemos usar la propiedad length para saber la longitud de ese array
    const hasUser = Object.keys(user).length > 0;
    
    return(
    <>
        <header className="header">
            <Link to="/" className="header__title">
                <h1>RodriVideo</h1>
                {/* <img className="header__img" src="./logo-platzi-video.png" alt="User" /> */}
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ? ( 
                        <img src={gravatar(user.email)} alt={user.email}/>
                    ):(
                        <img src="./user-icon.png" alt="User"/>
                    )}        
                    <p>{user.name}</p>
                </div>
                    <ul>
                        {hasUser 
                            ? (<li><a href="/">{user.name}</a></li>)
                            : null     
                        }
                        {hasUser 
                            ? <li>
                                <a href="#logout" onClick={handleLogout}>Cerrar Sesion</a>
                                </li>
                            : <li>
                                <Link to="/login">Iniciar Sesion</Link>
                                </li>
                        }
                    </ul> 
            </div>
        </header>
    </>
    )
}

const mapStateToProps = (state) =>{
    return{
        user: state.user,
    };
};

const mapDispatchToProps ={
    logoutRequest
};


Header.propTypes = {
    user: PropTypes.object,
    logoutRequest: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)