import { useState } from "react";

function LifeCalendar() {
  const [birthdate, setBirthdate] = useState("");
  const [filledBoxes, setFilledBoxes] = useState(Array(90 * 52).fill(false));

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
    const birthdateTimestamp = new Date(e.target.value).getTime();
    const nowTimestamp = Date.now();
    const diffInWeeks = Math.floor(
      (nowTimestamp - birthdateTimestamp) / (1000 * 60 * 60 * 24 * 7)
    );
    const newFilledBoxes = filledBoxes.map(
      (filled, index) => index < diffInWeeks
    );
    setFilledBoxes(newFilledBoxes);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2em", textAlign: "center" }}>
        A 90-Year Human Life in Weeks
      </h1>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label style={{ marginRight: "10px" }}>Date of Birth:</label>
        <input
          type="date"
          value={birthdate}
          onChange={handleBirthdateChange}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div style={{ border: "1px solid black", padding: "5px" }}>
        {[...Array(90)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              justifyContent: "center",
              marginRight: "-2px",
            }}
          >
            {[...Array(52)].map((_, colIndex) => {
              const boxIndex = rowIndex * 52 + colIndex;
              return (
                <div
                  key={colIndex}
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: filledBoxes[boxIndex] ? "black" : "white",
                    border: "1px solid black",
                    margin: "1px",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LifeCalendar;
