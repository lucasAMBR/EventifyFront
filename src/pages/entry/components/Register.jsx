import { useState } from "react";

function Register(){

    // Controle de carregamento
    const [ loading, setLoading ] = useState(false);

    // Controla o tipo de registro
    const [ userType, setUserType ] = useState("normal");

    // Conteudo dos inputs
    const [ nameInput, setNameInput ] = useState("");
    const [ emailInput, setEmailInput ] = useState("");
    const [ cpfInput, setCpfInput ] = useState("");
    const [ birthInput, setBirthInput ] = useState("");
    const [ contactInput, setContactInput ] = useState("");
    const [ passwordInput, setPasswordInput ] = useState("");
    const [ profilePicInput, setProfilePicInput ] = useState("");

    // Controla as mudanças nos inputs
    const handleNameChange = (e) => {
        setNameInput(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    };
    const handleCpfChange = (e) => {
        setCpfInput(e.target.value);
    };
    const handleBirthChange = (e) => {
        setBirthInput(e.target.value);
    };
    const handleContactChange = (e) => {
        setContactInput(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    };
    const handleProfilePicChange = (e) => {
        setProfilePicInput(e.target.files[0]);
    };

    // Controla a requisição de cadastrar usuario normal
    const handleNormalUserSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("email", emailInput);
        formData.append("name", nameInput);
        formData.append("password", passwordInput);
        formData.append("profilePic", profilePicInput);
        formData.append("birth", birthInput);
        formData.append("cpf", cpfInput);

        setLoading(true)
        try{
            const response = await fetch("http://localhost:8080/api/user/register-normal", {
                method: "POST",
                body: formData
            })

            if(response.ok){
                const data = await response.json();
                console.log(data);
                setLoading(false)
            }else{
                console.log("ERRO");
                setLoading(false)
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
                <>
                <div className="switch-menu">
                    <p className="switch-title">You are a:</p>
                    <p className="switch-options">
                        <span className={userType == "normal" ? "active" : ""} onClick={() => setUserType("normal")}>Regular user</span> | <span className={userType == "organizer" ? "active" : ""} onClick={() => setUserType("organizer")}>Organizer</span>
                    </p>
                </div>
                {userType == "normal" && 
                <form className="login-form" onSubmit={handleNormalUserSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" className="input" placeholder="Your name" value={nameInput} onChange={handleNameChange}/>
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input type="text" className="input" placeholder="example@email.com" value={emailInput} onChange={handleEmailChange}/>
                    </div>
                    <div>
                        <label>CPF</label>
                        <input type="text" className="input" placeholder="XXXXXXXXXXXX" value={cpfInput} onChange={handleCpfChange}/>
                    </div>
                    <div>
                        <label>Birth</label>
                        <input type="date" className="input birth" value={birthInput} onChange={handleBirthChange}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" className="input" placeholder="Password" value={passwordInput} onChange={handlePasswordChange}/>
                    </div>
                    <div className="profile-pic-area">
                        <p className="profile-pic-title">Profile pic</p>
                        <input id="file-upload" type="file" name="Profile pic" onChange={handleProfilePicChange}/>
                    </div>

                    <button className="submit" type="submit">{loading ? "LOADING..." : "Register"}</button>
                </form>
            }
            {userType == "organizer" && 
                <form className="login-form">
                    <div>
                        <label>Name</label>
                        <input type="text" className="input" placeholder="Your name" value={nameInput}/>
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input type="text" className="input" placeholder="example@email.com" value={emailInput}/>
                    </div>
                    <div>
                        <label>CPF</label>
                        <input type="text" className="input" placeholder="XXXXXXXXXXXX" value={cpfInput}/>
                    </div>
                    <div>
                        <label>Contact</label>
                        <input type="text" className="input" value={contactInput} placeholder="(XX) XXXX-XXXX"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" className="input" placeholder="Password" value={passwordInput}/>
                    </div>
                    <div className="profile-pic-area">
                        <p className="profile-pic-title">Profile pic</p>
                        <input id="file-upload" type="file" name="Profile pic" value={profilePicInput}/>
                    </div>

                    <button className="submit" type="submit">Register</button>
                </form>
            }
            </>
        </>
    )
}

export default Register;