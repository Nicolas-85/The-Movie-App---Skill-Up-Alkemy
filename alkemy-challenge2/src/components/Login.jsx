//Librerías
import axios from 'axios'
import swAlert from '@sweetalert/with-react'
import { useNavigate, Navigate } from 'react-router-dom'
//Hooks
import { useState } from 'react'
//Componentes
import Header from './Header';
import Footer from './Footer';
//Estilo
import "../CSS/login.css"
// import List from './List';





const Login = ()=> {
  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState("")
  //Funciones
  const submitHandler = (e)=> {
    e.preventDefault()
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(email, password)    
    // console.log("Fucnciona el prevent")
    // console.log(emailRegex.test(email))
    if (email === "" || password === "") {
      swAlert(<h2>No puede haber campos vacíos</h2>)
      return                                      //con "return" verificamos que no haya campos vacíos, sino, corta la función ahí!.
    }

    if (!emailRegex.test(email)) {
      swAlert(<h2>Formato de correo inválido</h2>)
      return
    } 
    
    /*Datos de verificación:
    url: 'http://challenge-react.alkemy.org'
    Email: challenge@alkemy.org
    Pass: react */
    if (email !== "challenge@alkemy.org" || password !== "react")  {
      swAlert(<h2>Datos incorrectos</h2>)
      return
    }

    swAlert(<h2>Estamos listos para enviar la info a quien sabe donde!!!</h2>)

    axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then((res)=> {
        console.log(res)
        const tokenMio = res.data.token 
        console.log(tokenMio)
        sessionStorage.setItem('myToken', tokenMio)
        navigate("/list")
      })
  }

  const token = sessionStorage.getItem('myToken')

    return(
      <>
        {token && <Navigate to="/list"/>}
        <Header/>
        <section className="main">
            <div className="formContainer">
              <h2>Inicio de Sesión.</h2>
              <p>Email: challenge@alkemy.org <br />
                Password: react
              </p>
              <form className="formulario" onSubmit={submitHandler}>
                  <label htmlFor="email">Correo electrónico:</label>
                  <input className="inputEmail" type="text" name="email"/>
                  <label htmlFor="password">Contraseña:</label>
                  <input className="inputPass" type="password" name="password"/>
                  <button type="submit">Ingresar</button>
              </form>
            </div>
        </section>
        <Footer/>
      </>
    )
}

export default Login