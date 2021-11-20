import React, { useEffect, useState } from "react";

export const CountDownTimeout = () => {
    const [countDown, setCountDown] = useState(10);
    const [stop, setStop] = useState(false);

    useEffect(() => {
        if (stop) return;
        const timerId = window.setTimeout(() => {
            if (countDown > 0) {
                setCountDown(countDown - 1);
            } else {
                clearTimeout(timerId);
            }
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [countDown, stop]);

    const handleToggleStop = () => {
        setStop(!stop);
    };
    const handleReset = () => {
        setCountDown(10);
        if (stop) {
            setStop(false);
        }
    };

    return (
        <>
            <h2>{countDown}</h2>
            <div className="group-btn">
                <button onClick={handleToggleStop} disabled={!countDown}>
                    {stop ? (
                        <i className="material-icons">play_arrow</i>
                    ) : (
                        <i className="material-icons">pause</i>
                    )}
                </button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    );
};