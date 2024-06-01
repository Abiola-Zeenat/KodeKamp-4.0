export default function TimerInput({
  inputMinutes,
  handleInputChange,
  inputKey,
}) {
  return (
    <div>
      <input
        key={inputKey}
        type="number"
        value={inputMinutes}
        onChange={handleInputChange}
        placeholder="Enter time in minutes"
      />
    </div>
  );
}
