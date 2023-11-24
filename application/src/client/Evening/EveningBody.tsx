import "./EveningBody.css";
import { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";

function EveningBody({
  switchValue,
  testerID,
  testeeID,
}: {
  switchValue: string;
  testerID: string;
  testeeID: string;
}) {
  // useful const's:
  const navigate = useNavigate();

  const someHabits = new Map([
    ["Smoking", { active: true, selected: false }],
    ["Stress", { active: true, selected: false }],
    ["Late dinner", { active: true, selected: false }],
    ["Hungry", { active: true, selected: false }],
    ["Thirsty", { active: true, selected: false }],
    ["Alcohol", { active: true, selected: false }],
    ["Coffee", { active: true, selected: false }],
    ["Screentime", { active: true, selected: false }],
    ["Exercise", { active: true, selected: false }],
    ["Shower", { active: true, selected: false }],
    ["Medication", { active: true, selected: false }],
    ["Yoga", { active: true, selected: false }],
  ]);

  const totalHabitList = [
    "smoking",
    "stress",
    "latedinner",
    "hungry",
    "thirsty",
    "alcohol",
    "coffee",
    "screentime",
    "exercise",
    "shower",
    "medication",
    "yoga",
    "nap",
    "openwindow",
    "shopping",
    "party",
    "singing",
    "noisy",
  ];

  const testHabitList = [
    ["smoking", "latedinner", "hungry", "screentime", "shower", "medication"],
    [
      "smoking",
      "stress",
      "latedinner",
      "hungry",
      "coffee",
      "shower",
      "medication",
      "yoga",
    ],
    ["smoking", "thirsty", "coffee", "shower"],
    ["smoking", "stress", "hungry", "alcohol", "screentime", "exercise"],
    ["smoking", "stress", "hungry", "alcohol", "exercise"],
    ["stress", "hungry", "alcohol", "exercise", "nap"],
    [
      "smoking",
      "stress",
      "hungry",
      "exercise",
      "nap",
      "openwindow",
      "shopping",
      "party",
    ],
    [
      "stress",
      "hungry",
      "alcohol",
      "coffee",
      "screentime",
      "nap",
      "shopping",
      "singing",
      "noisy",
    ],
  ];

  const csvHeader = [
    { label: "Time in sec", key: "time" },
    { label: "Number of wrong habits", key: "errorNum" },
    { label: "Error Rate in %", key: "errorRate" },
  ];

  // init Sessionstorage:
  if (JSON.parse(sessionStorage.getItem("habits")!, reviver) == null) {
    sessionStorage.setItem("habits", JSON.stringify(someHabits, replacer));
  }

  // useStates & useEffect:
  useEffect(() => {}, [switchValue]);

  const [isAddingHabit, setIsAddingHabit] = useState(false);
  const [newButtonLabel, setNewButtonLabel] = useState("");
  const [isDeletingHabit, setDeletingHabit] = useState(false);
  const [isTesting, setTesting] = useState(false);
  const [displayCSV, setDisplayCSV] = useState(false);
  const [csvData, setCsvData] = useState([
    { time: "0", errorNum: "0", errorRate: "0.0" },
  ]);
  const [timeLastClicked, setTimeLastClicked] = useState(0);

  const [habits, setHabits] = useState(
    JSON.parse(sessionStorage.getItem("habits")!, reviver) as Map<
      string,
      { active: boolean; selected: boolean }
    >
  );

  return (
    <main className="evening-body-container">
      <div className="top-buttons">
        <button
          className="mode-button"
          onClick={() => handleNavigationClick("/morning")}
        >
          MODE: Night
        </button>
        <button className="submit-button" onClick={handleSubmitButton}>
          Submit
        </button>
      </div>

      <div className="test-button-container">
        {!isTesting ? (
          <button className="timer-button" onClick={handleTestButton}>
            Start Test
          </button>
        ) : (
          <button className="timer-button started" onClick={handleTestButton}>
            End Test
          </button>
        )}
        {isTesting && (
          <div>
            {" "}
            Day: <span>{csvData.length} / 8</span>
          </div>
        )}
        {displayCSV ? (
          <CSVLink
            data={csvData.slice(1)}
            headers={csvHeader}
            filename={`${testerID}-${testeeID}.csv`}
            className="downloadCSV-link"
          >
            Download Test Result
          </CSVLink>
        ) : (
          <></>
        )}
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

  function handleTestButton() {
    if (isTesting) {
      setTesting(false);
      setDisplayCSV(true);
    } else {
      setDisplayCSV(false);
      setTimeLastClicked(Date.now());
      setCsvData([{ time: "0", errorNum: "0", errorRate: "0.0" }]);
      setTesting(true);
    }
  }

  function handleSubmitButton() {
    const curTime = ((Date.now() - timeLastClicked) / 1000)
      .toFixed(2)
      .toString();
    setTimeLastClicked(Date.now());
    let errorNum = 0;

    const curHabits = new Array();
    habits.forEach((value, key) => {
      if (value.active && value.selected)
        curHabits.push(key.toLowerCase().replace(/\s+/g, ""));
    });

    for (let i in totalHabitList) {
      if (
        testHabitList[csvData.length - 1].includes(totalHabitList[i]) !=
        curHabits.includes(totalHabitList[i])
      ) {
        errorNum += 1;
      }
    }

    let newEntry = {
      time: curTime,
      errorNum: errorNum.toString(),
      errorRate: ((errorNum * 100) / 18.0).toFixed(2).toString(),
    };
    setCsvData([...csvData, newEntry]);
    if (csvData.length >= 8) {
      handleTestButton();
      alert("Test successfully completed! Please download the result.");
    }
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
