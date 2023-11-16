import "./EveningBody.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function EveningBody() {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  const defaultHabits = [
    "Wake up early",
    "Exercise for at least 30 minutes",
    "Eat a balanced breakfast",
    "Set specific goals for the day",
    "Take short breaks every hour",
    "Drink plenty of water",
    "Practice mindfulness or meditation",
    "Read for at least 20 minutes",
    "Connect with a friend or family member",
    "Plan and prepare a healthy lunch",
    "Review and reflect on the day's accomplishments",
    "Get 7-8 hours of quality sleep",
  ];
  const [buttonLabels, setButtonLabels] = useState(defaultHabits);
  const [isAddingButton, setIsAddingButton] = useState(false);
  const [newButtonLabel, setNewButtonLabel] = useState("");

  const addNewButton = () => {
    setIsAddingButton(true);
  };

  const saveNewButton = () => {
    if (newButtonLabel.trim() !== "") {
      setButtonLabels((prevLabels) => [...prevLabels, newButtonLabel]);
      setNewButtonLabel("");
      setIsAddingButton(false);
    }
  };

  function handleHabitClick(e: React.MouseEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains("selected"))
      e.target.classList.remove("selected");
    else e.target.classList.add("selected");
  }

  return (
    <main className="evening-body-container">
      <div className="top-buttons">
        <button
          className="mode-button"
          onClick={() => handleButtonClick("/morning")}
        >
          MODE: Night
        </button>
        <button className="submit-button">Submit</button>
      </div>

      <h1>Select all that apply:</h1>
      <div className="button-grid card">
        {buttonLabels.map((label) => (
          <button
            key={label}
            className="habit-button"
            onClick={handleHabitClick}
          >
            {label}
          </button>
        ))}
      </div>
      {isAddingButton ? (
        <div className="add-button-container">
          <input
            type="text"
            placeholder="Enter new habit"
            value={newButtonLabel}
            onChange={(e) => setNewButtonLabel(e.target.value)}
            style={{ width: "100%", height: "40px" }}
          />
          <button className="save-button" onClick={saveNewButton}>
            Save
          </button>
        </div>
      ) : (
        <button className="add-button" onClick={addNewButton}>
          <FaPlus size={24} />
        </button>
      )}
    </main>
  );
}

export default EveningBody;
