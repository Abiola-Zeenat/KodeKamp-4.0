export default function TimerDisplay({ timeLeft, timer }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };

  return (
    <div>
      {timer > 0 ? (
        <h2 className="timer">{formatTime(timeLeft)}</h2>
      ) : (
        <h2>Enter a time and start the countdown</h2>
      )}
    </div>
  );
}
