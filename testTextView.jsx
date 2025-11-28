import "/src/style.css"

export function TestTextView(props){
    const TestComponent = props.currentTest.component

    function wordFoundACB(){
        console.log("yippie")
        props.onWordFound()
    }

    return (
        <div className="main-text">
            {TestComponent && <TestComponent onWordFound={wordFoundACB}/>}
        </div>
    )
}

