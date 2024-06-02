export default function TimerControls({
  timer,
  isRunning,
  timeLeft,
  onStartTimer,
  onPauseTimer,
  onResetTimer,
}) {
  return (
    <div>
      <button
        onClick={onStartTimer}
        disabled={(isRunning && timeLeft > 0) || !timer}
      >
        Start
      </button>
      <button onClick={onPauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={onResetTimer}>Reset</button>
    </div>
  );
}
