import "./EveningBody.css";
import { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function EveningBody({ switchValue }: { switchValue: string }) {
  useEffect(() => {}, [switchValue]);

  const navigate = useNavigate();

  const someHabits = new Map([
    ["Wake up early", { active: true, selected: false }],
    ["Exercise for at least 30 minutes", { active: true, selected: false }],
    ["Eat a balanced breakfast", { active: true, selected: false }],
    ["Set specific goals for the day", { active: true, selected: false }],
    ["Take short breaks every hour", { active: true, selected: false }],
    ["Drink plenty of water", { active: true, selected: false }],
    ["Practice mindfulness or meditation", { active: true, selected: false }],
    ["Read for at least 20 minutes", { active: true, selected: false }],
    ["Connect with a friend/family member", { active: true, selected: false }],
    ["Plan and prepare a healthy lunch", { active: true, selected: false }],
    ["Review and reflect on your day", { active: true, selected: false }],
    ["Get 7-8 hours of quality sleep", { active: true, selected: false }],
  ]);

  const [habits, setHabits] = useState(someHabits);
  const [isAddingHabit, setIsAddingHabit] = useState(false);
  const [newButtonLabel, setNewButtonLabel] = useState("");
  const [isDeletingHabit, setDeletingHabit] = useState(false);

  return switchValue === "A" ? (
    <main className="evening-body-container">
      <div>This is prototype A</div>
    </main>
  ) : (
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

      <div className="habit-container">
        <h1>Select all that apply:</h1>
        <div className="habit-body card">
          <WriteHabitList habits={habits} />
        </div>
      </div>

      <div className="buttonContainer">
        {isAddingHabit ? (
          <div className="addCustomHabitText">
            <input
              type="text"
              placeholder="Enter new habit"
              value={newButtonLabel}
              onChange={(e) => setNewButtonLabel(e.target.value)}
              style={{ width: "100%", height: "80%" }}
            />
            <button className="save-button" onClick={handleSaveButton}>
              Save
            </button>
          </div>
        ) : isDeletingHabit ? (
          <button className="exitDeleteHabit" onClick={handleExitDelete}>
            Back
          </button>
        ) : (
          <>
            <button className="addCustomHabitButton" onClick={handleAddButton}>
              <FaPlus size={24} />
            </button>
            <button className="enterDeleteHabit" onClick={handleEnterDelete}>
              <FaMinus size={20} />
            </button>
          </>
        )}
      </div>
    </main>
  );

  // helper functions:

  function handleAddButton() {
    setIsAddingHabit(true);
  }

  function handleExitDelete() {
    setDeletingHabit(false);
  }

  function handleEnterDelete() {
    setDeletingHabit(true);
  }

  function WriteHabitList(props: {
    habits: Map<string, { active: boolean; selected: boolean }>;
  }) {
    const activeList = new Array<string>();
    props.habits.forEach((value, key) => {
      if (value.active) activeList.push(key);
    });

    return (
      <>
        {activeList.map((value, key) => {
          if (!props.habits.get(value)?.active) return;
          if (isDeletingHabit) {
            return (
              <button
                key={key}
                className="habit-button deleting"
                onClick={handleHabitClick}
              >
                {value}
              </button>
            );
          } else if (props.habits.get(value)?.selected) {
            return (
              <button
                key={key}
                className="habit-button selected"
                onClick={handleHabitClick}
              >
                {value}
              </button>
            );
          } else
            return (
              <button
                key={key}
                className="habit-button"
                onClick={handleHabitClick}
              >
                {value}
              </button>
            );
        })}
      </>
    );
  }

  function handleButtonClick(path: string) {
    navigate(path);
  }

  function handleSaveButton() {
    if (newButtonLabel.trim() !== "") {
      setHabits((prev) => {
        const m = new Map(prev);
        m.set(newButtonLabel, { active: true, selected: false });
        return m;
      });
      setNewButtonLabel("");
      setIsAddingHabit(false);
    } else {
      setIsAddingHabit(false);
    }
  }

  function handleHabitClick(e: React.MouseEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    if (isDeletingHabit) {
      setHabits((prev) => {
        if (!(e.target instanceof HTMLElement)) return prev;
        const m = new Map(prev);
        m.delete(e.target.innerHTML);
        return m;
      });
    } else {
      if (e.target.classList.contains("selected"))
        e.target.classList.remove("selected");
      else e.target.classList.add("selected");
    }
  }
}

export default EveningBody;
