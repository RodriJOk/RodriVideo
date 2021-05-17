import React, {useState, useRef} from 'react';
import { connect } from 'react-redux'
import { registerRequest } from '../actions/index'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Register.css'
import ReCAPTCHA from 'react-google-recaptcha'

const Register = (props) => {

const [form, setValues] = useState({
    name: "",
    email: "",
    password: ""
})

const captcha = useRef(null);

const elrecaptcha = () =>{
    if(captcha.current.getValue()){
        console.log("El usuario dio Ok en el captcha")
    }
}

const handleInput = event =>{
    setValues({
        ...form,
        [event.target.name]: event.target.value
    })
}

const handleSubmit = event =>{
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/')
}
    return(
    <section className="login">
        <section className="login__container">
            <h2>Registrate</h2>
            <form className="login__container--form" onSubmit={handleSubmit}>
                <input 
                 name="name"
                 className="input" 
                 type="text" 
                 placeholder="Nombre"
                 onChange={handleInput}/>
                
                <input 
                 name="email"
                 type="text" 
                 className="input" 
                 placeholder="Correo"
                 onChange={handleInput}/>
                
                <input 
                 name="password"
                 type="password" 
                 className="input" 
                 placeholder="Contraseña"
                 onChange={handleInput}/>

                <ReCAPTCHA
                    ref= {captcha}
                    sitekey= "6LdMGdkaAAAAAOI6vEmWDxxB0Tp5Vxc_2r8dtq1v"
                    onChange= {elrecaptcha}
                />

                <button className="button">Registrarme</button>
            </form>
            <div className="login__container--section">
                <p>¿Ya tienes cuenta ?</p>
                    <Link to="/login">
                       <span>Iniciar Sesion</span> 
                    </Link>
            </div>
        </section>
    </section>
    )
}

const mapDispatchToProps = {
    registerRequest,
  };
  
  export default connect(null, mapDispatchToProps)(Register);