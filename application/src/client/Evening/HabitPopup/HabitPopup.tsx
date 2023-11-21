import { useState } from "react";
import "./HabitPopup.css";
import { FaMinus } from "react-icons/fa";

export default function HabitPopup(props: {
  open: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  habitList: Map<string, { active: boolean; selected: boolean }>;
  setHabits: React.Dispatch<
    React.SetStateAction<Map<string, { active: boolean; selected: boolean }>>
  >;
}) {
  if (!props.open) return null;

  const [isAddingHabit, setIsAddingHabit] = useState(false);
  const [newButtonLabel, setNewButtonLabel] = useState("");
  const [isDeletingHabit, setDeletingHabit] = useState(false);

  return (
    // overlay is the transparent gray background
    <main
      className="overlay"
      onClick={() => {
        props.setPopup((prev) => prev && false);
      }}
    >
      {/* article is the actual popup, etc. */}
      <article
        className="popupContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="buttonContainer">
          {isAddingHabit ? (
            <div className="addCustomHabitText">
              <input
                type="text"
                placeholder="Enter new habit"
                value={newButtonLabel}
                onChange={(e) => setNewButtonLabel(e.target.value)}
                style={{ width: "100%", height: "90%" }}
              />
              <button className="save-button" onClick={handleSaveButton}>
                Save
              </button>
            </div>
          ) : isDeletingHabit ? (
            <button className="deleteHabitButton" onClick={handleExitDelete}>
              Back
            </button>
          ) : (
            <>
              <button
                className="addCustomHabitButton"
                onClick={handleAddButton}
              >
                Custom Habit
              </button>
              <button className="deleteHabitButton" onClick={handleEnterDelete}>
                <FaMinus size={20} />
              </button>
            </>
          )}
        </div>
        <div className="habitContainer" id="habitTable">
          <WriteHabitList
            habitList={props.habitList}
            setHabits={props.setHabits}
          />
        </div>
      </article>
    </main>
  );

  // helper functions:

  function handleAddButton() {
    setIsAddingHabit(true);
  }

  function handleExitDelete() {
    setDeletingHabit(false);
  }

  function handleSaveButton() {
    if (newButtonLabel.trim() !== "") {
      props.setHabits((prev) => {
        const m = new Map(prev);
        m.set(newButtonLabel, { active: false, selected: false });
        return m;
      });
      setNewButtonLabel("");
      setIsAddingHabit(false);
    } else {
      setIsAddingHabit(false);
    }
  }

  function handleEnterDelete() {
    setDeletingHabit((prev) => prev || true);
  }

  function handleHabitClick(e: React.MouseEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    if (isDeletingHabit) {
      props.setHabits((prev) => {
        if (!(e.target instanceof HTMLElement)) return prev;
        const m = new Map(prev);
        m.delete(e.target.innerHTML);
        return m;
      });
    } else {
      if (e.target.classList.contains("active"))
        e.target.classList.remove("active");
      else e.target.classList.add("active");
    }
  }

  // Little explanation:
  // for each key (which contains the habit as string), if it is already active, we return.
  // else we return a button which has an onClick which will activate it and add it to the main habit list.
  function WriteHabitList(props: {
    habitList: Map<string, { active: boolean; selected: boolean }>;
    setHabits: React.Dispatch<
      React.SetStateAction<Map<string, { active: boolean; selected: boolean }>>
    >;
  }) {
    if (props.habitList.size == 0) {
      return;
    }

    let activeList = new Array<string>();
    let disabledList = new Array<string>();

    props.habitList.forEach((values, key) => {
      if (values.active == false) {
        disabledList.push(key);
        return;
      }
      activeList.push(key);
    });

    return (
      <>
        {disabledList.map((elem, key) => {
          return (
            <button
              className="habitButton"
              key={key}
              onClick={(e) => {
                handleHabitClick(e);
                props.setHabits((prev) => {
                  if (prev.get(elem) == null) return prev;
                  let m = new Map(prev);
                  let a = m.get(elem)!.active;
                  let s = m.get(elem)!.selected;
                  return m.set(elem, { active: !a, selected: s });
                });
              }}
            >
              {elem}
            </button>
          );
        })}
        {activeList.map((elem, key) => {
          return (
            <button
              className="habitButton active"
              key={key}
              onClick={(e) => {
                handleHabitClick(e);
                props.setHabits((prev) => {
                  if (prev.get(elem) == null) return prev;
                  let m = new Map(prev);
                  let a = m.get(elem)!.active;
                  let s = m.get(elem)!.selected;
                  return m.set(elem, { active: !a, selected: s });
                });
              }}
            >
              {elem}
            </button>
          );
        })}
      </>
    );
  }
}
