import "/src/style.css"

export function WordView(props){

    return (
        <div className="flex-box">
            <h1 className="test-title">Test {props.currentTest.name}</h1>
            <h3>Ordet du ska hitta:</h3>
            <p>{props.currentTest.word}</p>
        </div>
    )
}