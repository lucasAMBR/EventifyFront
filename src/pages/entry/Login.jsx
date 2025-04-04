import { useState, useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'

function Login() {

    const {display, setDisplay, loggedUser, setLoggedUser} = useContext(DisplayContext)

    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const [errorMessage, setErrorMessage] = useState(null)

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }


    const handleLogin = async(event) => {
        event.preventDefault();

        setErrorMessage(null)

        const formData = new FormData();
        formData.append("email", emailInput);
        formData.append("password", passwordInput);

        try{
            const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            body:formData
        })

        if(response.ok){
            const data = await response.json();
            console.log(data)
            setLoggedUser(data);
        }else{
            const data = await response.json();
            setErrorMessage(data);
        }

        }catch(error){
            console.log(error);
        }

    }

    return (
        <>
        <form onSubmit={handleLogin}>
            {errorMessage != null ? <div>Erro: {errorMessage.message}</div> : ""}
            <input type="text" placeholder="email" value={emailInput} onChange={handleEmailChange}/>
            <input type="password" placeholder="senha" value={passwordInput} onChange={handlePasswordChange}/>
            <button type="submit">Login</button>
        </form>
        {loggedUser != null && <h2>{loggedUser.name}</h2>}
        </>
    )
}

export default Login
