
export function CheckpointView(props){
    function finishSwitchACB(){
        props.onSwitchDone()
    }
    console.log(props.finished)
    return <div className="flex-box">
        <p className="test-title">STOPP</p>
        {props.finished?
         <p className="welcome">Bra jobbat! Du är nu klar med testet och kan gå tillbaka till formuläret!</p>
         :
         <p className="welcome">Bra jobbat! Meddela oss att du nu kommit halvvägs och vänta !</p>
    }
        <p className="main-text">OBS! Klicka ej på knappen</p>
        <button className="user-btn"onClick={finishSwitchACB}>Klar</button>
    </div>
}