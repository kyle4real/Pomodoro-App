/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import { useEffect, useRef, useState } from "react";
import alarm from "./../sounds/alarm.mp3";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timerSecond: 0,
            intervalId: 0,
        };
        this.playTimer = this.playTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.skipTimer = this.skipTimer.bind(this);
    }

    playTimer() {
        if (!this.props.timerOn) {
            this.props.setTimerOn(true);
            let intervalId = setInterval(this.decreaseTimer, 1000);
            this.setState({
                intervalId: intervalId,
            });
        } else {
            this.stopTimer();
        }
    }

    stopTimer() {
        this.props.setTimerOn(false);
        clearInterval(this.state.intervalId);
    }

    resetTimer() {
        const audio = document.getElementById("beep");
        audio.pause();
        audio.currentTime = 0;
        if (this.props.timerOn) {
            this.stopTimer();
        }
        this.props.resetTimer();
        this.setState({
            timerSecond: 0,
        });
    }

    skipTimer() {
        if (this.props.timerOn) {
            this.stopTimer();
        }
        this.setState({
            timerSecond: 0,
        });
        this.props.skip();
    }

    playAudio() {
        const audio = document.getElementById("beep");
        audio.play();
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 2000);
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    this.playAudio();
                    if (this.props.isSession) {
                        this.props.setIsSession(false);
                    } else {
                        this.props.setIsSession(true);
                    }
                    this.props.toggleInterval();
                } else {
                    this.props.decrementTimerMinute();
                    this.setState({
                        timerSecond: 59,
                    });
                }
                break;
            default:
                this.setState((prev) => {
                    return {
                        timerSecond: prev.timerSecond - 1,
                    };
                });
                break;
        }
    }
    render() {
        const { isSession, timerMinute } = this.props;
        const { timerSecond } = this.state;
        return (
            <>
                <div className="timer">
                    <div className="timer-display">
                        <h2 id="timer-label">{isSession ? "Session" : "Break"}</h2>
                        <div id="time-left">
                            <span>{timerMinute}</span>
                            <span>:</span>
                            <span>
                                {timerSecond === 0
                                    ? "00"
                                    : timerSecond < 10
                                    ? "0" + timerSecond
                                    : timerSecond}
                            </span>
                        </div>
                    </div>
                    {/* <div id="start_stop" onClick={() => setTimerOn(!timerOn)}>
                start_stop
            </div> */}
                    <div className="controls">
                        <div id="start_stop" onClick={this.playTimer}>
                            start/stop
                        </div>
                        <div id="reset" onClick={this.resetTimer}>
                            reset
                        </div>
                        <div id="skip" onClick={this.skipTimer}>
                            skip
                        </div>
                    </div>
                </div>
                <audio src={alarm} type="audio/mpeg" id="beep"></audio>
            </>
        );
    }
}

export default Timer;
