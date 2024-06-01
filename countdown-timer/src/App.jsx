import TimerControls from "./components/TimerControls";
import { useState, useEffect } from "react";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import "./App.css";

function App() {
  const [inputMinutes, setInputMinutes] = useState("");
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
    setInputMinutes(e.target.value);
  };

  const handleStartTimer = () => {
    if (!isRunning) {
      if (timeLeft === 0 && inputMinutes) {
        const timeInSeconds = parseInt(inputMinutes, 10) * 60;
        if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
          setTimeLeft(timeInSeconds);
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
    setInputMinutes("");
    setInputKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="timer-card">
      <h1>Countdown Timer</h1>
      <TimerDisplay timeLeft={timeLeft} />
      <TimerInput handleInputChange={handleInputChange} inputKey={inputKey} />

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
