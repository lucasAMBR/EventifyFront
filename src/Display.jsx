import { useContext } from "react"
import { DisplayContext } from "./context/DisplayContext"
import Entry from "./pages/entry/Entry"
import Home from "./pages/home/Home"
import Events from "./pages/events/Events";

function Display(){

    const {display, setDisplay, loggedUser, setLoggedUser} = useContext(DisplayContext)

    return(
        <>
        <>{display == "home" && <Home />}</>
        <>{display === "events" && <Events />} {Events}</>
        <>{display == "entry" && loggedUser == null && <Entry />}</>
        <>{display == "entry" && loggedUser != null && "principal"}</>
        </>
    )
}

export default Display