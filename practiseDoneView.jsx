import "/src/style.css"

export function PractiseDoneView(props){
    function startACB(){
        props.model.getCurrentTest()
        window.location.hash = "/test"
    }
    return (
        <div className="flex-box">
            <h1 className="welcome">Övning</h1>
            <p className="main-text">
                Övningen är nu klar! Nu hoppas vi att du har koll på hur resten av testen ska genomföras. Om du har några frågor
                kan du ställa de nu!!

                När du är redo att fortsätta med det riktiga testet kan du trycka på knappen nedan
            </p>
            <button className="user-btn" onClick={startACB}>Start</button>
        </div>
    )
}