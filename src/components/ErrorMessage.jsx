import "./ErrorMessage.css"

function ErrorMessage({ message }) {

    return(
        <div className="error-message">
            <img className="warning" src="/ErrorWarning.svg" />
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage;