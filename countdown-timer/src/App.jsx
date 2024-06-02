import TimerControls from "./components/TimerControls";
import { useState, useEffect, useRef } from "react";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(false);
  const [inputSeconds, setInputSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputKey, setInputKey] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleInputChange = (e) => {
    setInputSeconds(e.target.value);
  };
  const handleSetTimer = () => {
    setTimeLeft(inputSeconds);
    setTimer(true);
  };
  const handleStartTimer = () => {
    if (!isRunning) {
      if (timeLeft === 0 && inputSeconds) {
        // const timeInSeconds = parseInt(inputSeconds, 10) * 60;
        if (!isNaN(inputSeconds) && inputSeconds > 0) {
          setTimeLeft(inputSeconds);
        }
      }
      setIsRunning(true);
    }
  };
  const handlePauseTimer = () => {
    setIsRunning(false);
  };
  const handleResetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setInputSeconds("");
    setTimer(false);
    setInputKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="timer-card">
      <h1>Countdown Timer</h1>
      <TimerDisplay timeLeft={timeLeft} timer={timer} />
      <TimerInput
        onSetTimer={handleSetTimer}
        handleInputChange={handleInputChange}
        inputKey={inputKey}
      />

      <TimerControls
        isRunning={isRunning}
        timeLeft={timeLeft}
        onStartTimer={handleStartTimer}
        onPauseTimer={handlePauseTimer}
        onResetTimer={handleResetTimer}
      />
    </div>
  );
}

export default App;
