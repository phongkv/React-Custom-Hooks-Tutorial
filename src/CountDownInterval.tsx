import React, { useEffect, useRef, useState } from "react";

export const CountDownInterval = () => {
    const [countDown, setCountDown] = useState(10);
    const [stop, setStop] = useState(false);
    const intervalRef = useRef<number | undefined>(undefined);

    const clearTimer = () => {
        window.clearInterval(intervalRef.current);
    };

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setCountDown((prevCount) => {
                if (prevCount > 0) {
                    return prevCount - 1;
                } else {
                    clearTimer();
                    return 0;
                }
            });
        }, 1000);
        return () => {
            clearTimer();
        };
    }, []);

    const handleToggleStop = () => {
        setStop(!stop);
        clearTimer();
    };
    const handleReset = () => { };

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