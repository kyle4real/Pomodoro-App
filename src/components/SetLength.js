const SetLength = ({
    breakLength,
    sessionLength,
    setBreakLength,
    setSessionLength,
    setTimerMinute,
    isSession,
    timerOn,
}) => {
    const breakDecrement = () => {
        if (timerOn) return;
        if (breakLength === 1) return;
        setBreakLength((prev) => prev - 1);
        if (isSession) return;
        setTimerMinute((prev) => prev - 1);
    };
    const breakIncrement = () => {
        if (timerOn) return;
        if (breakLength === 60) return;
        setBreakLength((prev) => prev + 1);
        if (isSession) return;
        setTimerMinute((prev) => prev + 1);
    };
    const sessionDecrement = () => {
        if (timerOn) return;
        if (sessionLength === 1) return;
        setSessionLength((prev) => prev - 1);
        if (!isSession) return;
        setTimerMinute((prev) => prev - 1);
    };
    const sessionIncrement = () => {
        if (timerOn) return;
        if (sessionLength === 60) return;
        setSessionLength((prev) => prev + 1);
        if (!isSession) return;
        setTimerMinute((prev) => prev + 1);
    };
    return (
        <div className="set-length">
            <div>
                <h2 id="break-label" className="label">
                    Break Length
                </h2>
                <div>
                    <i
                        className="far fa-minus-square"
                        id="break-decrement"
                        onClick={breakDecrement}
                    ></i>
                    <div id="break-length" className="length">
                        {breakLength}
                    </div>
                    <i
                        className="far fa-plus-square"
                        id="break-increment"
                        onClick={breakIncrement}
                    ></i>
                </div>
            </div>
            <div>
                <h2 id="session-label" className="label">
                    Session Length
                </h2>
                <div>
                    <i
                        className="far fa-minus-square"
                        id="session-decrement"
                        onClick={sessionDecrement}
                    ></i>
                    <div id="session-length" className="length">
                        {sessionLength}
                    </div>
                    <i
                        className="far fa-plus-square"
                        id="session-increment"
                        onClick={sessionIncrement}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default SetLength;

// const handleLength = (e, length, setLength, type) => {
//     if (e === "dec") {
//         const newLength = length - 1;
//         if (newLength === 0) return;
//         setLength(newLength);
//         if (type !== "break") return;
//         setTimerMinute((prev) => prev - 1);
//     }
//     if (e === "inc") {
//         const newLength = length + 1;
//         if (newLength === 60) return;
//         setLength(newLength);
//         if (type !== "session") return;
//         setTimerMinute((prev) => prev + 1);
//     }
// };
