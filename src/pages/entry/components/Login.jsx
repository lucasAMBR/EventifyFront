import { useState, useContext } from 'react'
import { DisplayContext } from '../../../context/DisplayContext'

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
        <form className="login-form" onSubmit={handleLogin}>
            {errorMessage != null ? <div>Erro: {errorMessage.message}</div> : ""}
            <div>
                <label>E-mail</label>
                <input className="input" type="text" placeholder="example@email.com" value={emailInput} onChange={handleEmailChange}/>
            </div>
            <div>
                <label>Password</label>
                <input className="input" type="password" placeholder="Password" value={passwordInput} onChange={handlePasswordChange}/>
            </div>
            <button className="submit" type="submit">Login</button>
            <p className='mini-text'>Forget your password? <span>click here</span></p>
        </form>
        {loggedUser != null && <h2>{loggedUser.name}</h2>}
        </>
    )
}

export default Login
