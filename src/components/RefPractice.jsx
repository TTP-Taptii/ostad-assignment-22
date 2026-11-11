import { useRef, useState } from "react";

function RefPractice() {
  const inputRef = useRef(null);
  const [shownValue, setShownValue] = useState("");

  const handleShow = () => {
    setShownValue(inputRef.current.value);
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="card">
      <h3>useRef Practice</h3>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <div className="btn-row">
        <button onClick={handleShow}>Show Value</button>
        <button className="secondary" onClick={handleFocus}>Focus Input</button>
      </div>
      {shownValue && <p className="output">You typed: <strong>{shownValue}</strong></p>}
    </div>
  );
}

export default RefPractice;
