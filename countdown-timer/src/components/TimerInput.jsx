export default function TimerInput({
  timer,
  onSetTimer,
  inputSeconds,
  handleInputChange,
  inputKey,
}) {
  return (
    <div>
      <input
        key={inputKey}
        type="number"
        value={inputSeconds}
        onChange={handleInputChange}
        placeholder="Enter time in seconds"
      />
      <button onClick={onSetTimer} disabled={timer}>
        Set Timer
      </button>
    </div>
  );
}
