import { useState } from "react";
import SetLength from "./SetLength";
import Timer from "./Timer";

const PomodoroClock = () => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);

    const [isSession, setIsSession] = useState(true);
    const [timerMinute, setTimerMinute] = useState(isSession ? sessionLength : breakLength);
    const [timerOn, setTimerOn] = useState(false);

    const onDecrementTimerMinute = () => {
        setTimerMinute((prev) => prev - 1);
    };

    const onToggleInterval = () => {
        if (isSession) {
            setTimerMinute(sessionLength);
        } else {
            setTimerMinute(breakLength);
        }
    };

    const onResetTimer = () => {
        setBreakLength(5);
        setSessionLength(25);
        if (isSession) {
            setTimerMinute(25);
        } else {
            setTimerMinute(5);
        }
    };

    const onSkip = () => {
        setIsSession((prev) => !prev);
        if (isSession) {
            setTimerMinute(breakLength);
        } else {
            setTimerMinute(sessionLength);
        }
    };

    return (
        <div className="pomodoro">
            <SetLength
                setBreakLength={setBreakLength}
                setSessionLength={setSessionLength}
                breakLength={breakLength}
                sessionLength={sessionLength}
                setTimerMinute={setTimerMinute}
                isSession={isSession}
                timerOn={timerOn}
            />
            <Timer
                isSession={isSession}
                setIsSession={setIsSession}
                timerMinute={timerMinute}
                decrementTimerMinute={onDecrementTimerMinute}
                toggleInterval={onToggleInterval}
                resetTimer={onResetTimer}
                timerOn={timerOn}
                setTimerOn={setTimerOn}
                skip={onSkip}
            />
        </div>
    );
};

export default PomodoroClock;
