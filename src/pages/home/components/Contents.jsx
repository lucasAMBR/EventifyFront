const Contents = () => {


    return (
        <div className="contantArea">
            <div className="textArea">
                <h1>Unforgettable experiences just a click away!</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, suscipit expedita! Alias possimus ullam magni commodi aliquam, in minus aspernatur amet, ut, consectetur pariatur! Qui tempore fugiat eius velit ullam.</p>
                <div className="button">Learn more about the project</div>
            </div>
            <div className="carroselArea">
                <h2>Highlighted Event</h2>
                <div className="Card">
                    <div className="CardImage">
                        <div className="blur">

                        </div>
                    </div>
                    <div className="CartTitle">
                        CartTitle
                    </div>
                    <div className="CardDetails">
                        <div className="DetailsArea">   
                        <div>                
                            <p><img src = "/time.svg"/>25/10, 22:30</p>
                            <p><img src = "/place.svg"/>São Paulo, SP, Brasil</p>                            
                        </div>
                        <div>    
                            <p><img src = "/person.svg"/>Limite: 15.000 pessoas</p>
                            <p><img src = "/person.svg"/>Classificacao indiativa</p>
                        </div>
                         </div>
                       <div className="button2">Learn more about the project</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contents