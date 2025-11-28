
export function ResultsView(props) {
    function restartACB(){
        props.onTestRestart()
    }
    return (
        <div className="flex-box">
            <h2 className="welcome">Test Results</h2>
            <ul>
                {props.stats.map(displayResultsCB)}
            </ul>
            <button className="next-btn" onClick={restartACB}>Starta om!</button>
        </div>
    );
}

function displayResultsCB(test) {
    return (
        <li className="main-text" key={test.name}>
            <strong>{test.name}</strong>: {test.time} sec
        </li>
    );
}
