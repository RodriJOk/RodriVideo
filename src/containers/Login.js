import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginRequest} from '../actions/index'
import googleIcon from '../assets/static/image/google-icon.webp'
import twitterIcon from '../assets/static/image/twitter-icon.webp'
import '../assets/styles/components/Login.css'

const Login = (props) => {
    const [form, setValues] = useState({
        email: ''
    });

    const handleInput = event =>{
        setValues({
            ...form, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        props.loginRequest(form)
        props.history.push('/');
    }

    return(
    <section className="logins">
        <section className="logins__container">
            <h2 className="logins__container--title">Inicia Seccion</h2>
            <form className="logins__container--form" onSubmit={handleSubmit}>
                <input 
                  name= "email"
                  type= "text" 
                  className= "input" 
                  placeholder= "Correo"
                  onChange={handleInput}
                />
                <input 
                  name="password"
                  type="password" 
                  className="input" 
                  placeholder="Contraseña"
                  onChange={handleInput}
                />
                <button className="button" type="submit">Iniciar Sesion</button>
                <div className="logins__container--remember-me">
                    <label>
                        <input type="checkbox" name="" id="cbox1" value="checkbox"/>Recuerdame
                    </label>
                    <a href="/">Olvide mi contraseña</a>
                </div>
            </form>
            <section className="logins__container--social-media">
                <div>
                    <a href="#" className="ancla">
                        <img src={googleIcon} alt="Google"/>
                        <span> Inicia sesion con Google </span>
                    </a>
                </div>
                <div>
                    <a href="#" className="ancla">
                        <img src={twitterIcon} alt="Twitter"/>
                        <span> Inicia sesion con Twitter </span>
                    </a>
                </div>
            </section>
            <section>
                <p className="logins__container--register">
                    ¿No tienes ninguna cuenta?
                  <Link to="/register">
                    Registrate
                  </Link>
                </p>
            </section>
        </section>
    </section>
    )
}

const mapDispatchToProps = {
    loginRequest,
};

export default connect (null, mapDispatchToProps)(Login);