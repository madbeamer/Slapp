import "./EveningBody.css";
import { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HabitPopup from "./HabitPopup/HabitPopup";

function EveningBody() {
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
  const [openPopup, setPopup] = useState(false);

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
        <WriteHabitList habits={habits} />
      </div>

      <button
        className="addHabitButton"
        onClick={() => {
          setPopup(true);
        }}
      >
        <FaEdit size={20} />
      </button>

      <HabitPopup
        open={openPopup}
        setPopup={setPopup}
        habitList={habits}
        setHabits={setHabits}
      />
    </main>
  );

  // helper functions:

  function WriteHabitList(props: {
    habits: Map<string, { active: boolean; selected: boolean }>;
  }) {
    const activeList = new Array<string>();
    props.habits.forEach((value, key) => {
      if (value.active) activeList.push(key);
    });

    console.log(activeList);

    return (
      <>
        {activeList.map((value, key) => {
          if (props.habits.get(value)?.selected)
            return (
              <button
                key={key}
                className="habit-button selected"
                onClick={handleHabitClick}
              >
                {value}
              </button>
            );
          else
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

  function handleHabitClick(e: React.MouseEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains("selected"))
      e.target.classList.remove("selected");
    else e.target.classList.add("selected");
  }
}

export default EveningBody;
