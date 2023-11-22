import "./EveningBody.css";
import { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function EveningBody({ switchValue }: { switchValue: string }) {
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

  // init Sessionstorage:
  if (JSON.parse(sessionStorage.getItem("habits")!, reviver) == null) {
    sessionStorage.setItem("habits", JSON.stringify(someHabits, replacer));
  }

  // useStates & useEffect:
  useEffect(() => {}, [switchValue]);
  const [habits, setHabits] = useState(
    JSON.parse(sessionStorage.getItem("habits")!, reviver) as Map<
      string,
      { active: boolean; selected: boolean }
    >
  );
  const [isAddingHabit, setIsAddingHabit] = useState(false);
  const [newButtonLabel, setNewButtonLabel] = useState("");
  const [isDeletingHabit, setDeletingHabit] = useState(false);

  // return...
  return (
    <main className="evening-body-container">
      <div className="top-buttons">
        <button
          className="mode-button"
          onClick={() => handleNavigationClick("/morning")}
        >
          MODE: Night
        </button>
        <button className="submit-button">Submit</button>
      </div>

      <div className="habit-container">
        <h1>Select all that apply:</h1>
        {switchValue === "A" ? (
          <WriteHabitListSlider habits={habits} />
        ) : (
          <WriteHabitListMulti habits={habits} />
        )}
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

  // helper function for parsing Map data structure
  function replacer(_key: string, value: any) {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }

  // helper function for parsing Map data structure
  function reviver(_key: string, value: any) {
    if (typeof value === "object" && value !== null) {
      if (value.dataType === "Map") {
        return new Map(value.value);
      }
    }
    return value;
  }

  // trivial functions:
  function handleAddButton() {
    setIsAddingHabit(true);
  }

  function handleExitDelete() {
    setDeletingHabit(false);
  }

  function handleEnterDelete() {
    setDeletingHabit(true);
  }

  function handleNavigationClick(path: string) {
    navigate(path);
  }

  // when clicked on save habit.
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

    sessionStorage.setItem("habits", JSON.stringify(habits, replacer));
  }

  // when clicked on habit.
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
      if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
      } else {
        e.target.classList.add("selected");
      }
      setHabits((prev) => {
        if (!(e.target instanceof HTMLElement)) return prev;
        let newMap = new Map(prev);
        let a = prev.get(e.target.innerHTML)!.active;
        let s = prev.get(e.target.innerHTML)!.selected;
        newMap.set(e.target.innerHTML, { active: a, selected: !s });
        sessionStorage.setItem("habits", JSON.stringify(newMap, replacer));
        return newMap;
      });
    }
  }

  // helper function component for Sliders. Makes the Slider button itself
  function MakeSliderButton(props: {
    habitName: string;
    deleting: boolean;
    selected: boolean;
  }) {
    if (props.deleting) {
      return (
        <div className="habit-slider-container">
          <button className="habit-slider deleting" onClick={handleHabitClick}>
            {props.habitName}
          </button>
        </div>
      );
    } else if (props.selected) {
      return (
        <div className="habit-slider-container">
          <button className="habit-slider selected" onClick={handleHabitClick}>
            {props.habitName}
          </button>
        </div>
      );
    } else {
      return (
        <div className="habit-slider-container">
          <button className="habit-slider" onClick={handleHabitClick}>
            {props.habitName}
          </button>
        </div>
      );
    }
  }

  // maps the habits to sliders.

  function WriteHabitListSlider(props: {
    habits: Map<string, { active: boolean; selected: boolean }>;
  }) {
    const activeList = new Array<string>();
    props.habits.forEach((value, key) => {
      if (value.active) activeList.push(key);
    });

    return (
      <div className="habit-body slider">
        {activeList.map((value, key) => {
          if (!props.habits.get(value)?.active) return;
          if (isDeletingHabit) {
            return (
              <MakeSliderButton
                key={key}
                habitName={value}
                deleting={true}
                selected={false}
              />
            );
          } else {
            return (
              <MakeSliderButton
                key={key}
                habitName={value}
                deleting={false}
                selected={props.habits.get(value)!.selected}
              />
            );
          }
        })}
      </div>
    );
  }

  // maps habits to multi select buttons.
  function WriteHabitListMulti(props: {
    habits: Map<string, { active: boolean; selected: boolean }>;
  }) {
    const activeList = new Array<string>();
    props.habits.forEach((value, key) => {
      if (value.active) activeList.push(key);
    });

    return (
      <div className="habit-body multi">
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
      </div>
    );
  }
}

export default EveningBody;
