import { useContext } from "react"
import { DisplayContext } from "./context/DisplayContext"
import Login from "./pages/entry/Login"

function Display(){

    const {display, setDisplay, loggedUser, setLoggedUser} = useContext(DisplayContext)

    return(
        <>
        <>{display == "login" && loggedUser == null && <Login />}</>
        <>{display == "login" && loggedUser != null && "principal"}</>
        </>
    )
}

export default Display