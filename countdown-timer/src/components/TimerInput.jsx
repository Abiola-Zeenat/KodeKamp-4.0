export default function TimerInput({
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
      <button onClick={onSetTimer}>Set Timer</button>
    </div>
  );
}
