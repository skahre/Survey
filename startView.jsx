import "/src/style.css"

export function StartView(props){
    function startACB(){
        props.model.getCurrentTest()
        window.location.hash = "/test"
    }
    return (
        <div className="flex-box">
            <h1 className="welcome">Välkommen till testet!</h1>
            <p className="main-text">
                Testet kommer börja med ett exempel där du får chans att "öva" på hur resten av testet kommer gå till.
                Du kommer presenteras med ett ord. När du sedan trycker på "Redo!" kommer en text att dyka upp. Du ska leta efter ordet
                och trycka på det så fort du hittat det. Tiden det tar för dig att hitta ordet kommer att noteras.
            </p>
            <p className="main-text">
            VIKTIGT: Du ska INTE läsa texterna utan skumma och fokusera på att leta efter det specificerade ordet. Texterna har
            ingen betydande mening och det finns ingen poäng att läsa.
            </p>
            <button className="user-btn" onClick={startACB}>Start</button>
        </div>
    )
}