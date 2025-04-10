import { useContext } from "react"
import { DisplayContext } from "./context/DisplayContext"
import Entry from "./pages/entry/Entry"
import Home from "./pages/home/Home"
import Events from "./pages/events/Events";
import Feed from "./pages/feed/Feed";


function Display(){

    const {display, setDisplay, loggedUser, setLoggedUser} = useContext(DisplayContext)

    return(
        <>
         {display === "home" && <Home />}
         {display === "events" && <Events />}
         {display === "feed" && <Feed />}
         {display === "entry" && loggedUser === null && <Entry />}
         {display === "entry" && loggedUser !== null && <div>principal</div>}
        </>
    )
}

export default Display