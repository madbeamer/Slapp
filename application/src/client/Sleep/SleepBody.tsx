import { useState, useEffect } from "react";
import "./SleepBody.css";
import ReactSwitch from "react-switch";

function SleepBody({
  setSleepActivated,
}: {
  setSleepActivated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isMeditationOn, setIsMeditationOn] = useState(false);
  const [meditationMelody, setMeditationMelody] = useState("");
  const [meditationDuration, setMeditationDuration] = useState(10);

  const [isAlarmOn, setIsAlarmOn] = useState(false);
  const [alarmMelody, setAlarmMelody] = useState("");
  const [alarmTime, setAlarmTime] = useState("00:00");

  const [countdown, setCountdown] = useState(999999);
  const [showPopup, setShowPopup] = useState(false);
  const [showBlurBackground, setShowBlurBackground] = useState(false);

  const [airplaneMode, setAirplaneMode] = useState(false);

  const handleMeditationToggle = (checked: boolean) => {
    setIsMeditationOn(checked);
  };

  const handleAlarmToggle = (checked: boolean) => {
    setIsAlarmOn(checked);
  };

  const handleAirplaneModeToggle = (checked: boolean) => {
    setAirplaneMode(checked);
  };

  const handleMeditationMelodyChange = (event: any) => {
    setMeditationMelody(event.target.value);
  };

  const handleMeditationDurationChange = (event: any) => {
    setMeditationDuration(parseInt(event.target.value));
  };

  const handleAlarmMelodyChange = (event: any) => {
    setAlarmMelody(event.target.value);
  };

  const handleAlarmTimeChange = (event: any) => {
    setAlarmTime(event.target.value);
  };

  const handleButtonClick = () => {
    setCountdown(5);
    setShowPopup(true);
    setShowBlurBackground(true);
  };

  const handleCancelClick = () => {
    setCountdown(999999);
    setShowPopup(false);
    setShowBlurBackground(false);
  };

  useEffect(() => {
    let countdownTimer: number;

    if (countdown > 0) {
      countdownTimer = window.setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    } else if (countdown === 0) {
      setSleepActivated(true); // Change state to true after countdown finishes
      setShowPopup(false); // Hide the countdown popup after countdown finishes
    }

    return () => clearInterval(countdownTimer);
  }, [countdown, setSleepActivated]);

  const alarmMelodyOptions = [
    { value: "bell.mp3", label: "Bell Sound" },
    { value: "chimes.mp3", label: "Chimes Sound" },
    { value: "alarm_clock.mp3", label: "Alarm Clock Ring" },
  ];

  // Dummy data for meditation melodies
  const meditationMelodyOptions = [
    { value: "ocean_waves.mp3", label: "Ocean Waves" },
    { value: "forest_sounds.mp3", label: "Forest Sounds" },
    { value: "meditation_bell.mp3", label: "Meditation Bell" },
  ];

  const mediationDurationOptions = [
    { value: "5", label: "5 min" },
    { value: "10", label: "10 min" },
    { value: "15", label: "15 min" },
    { value: "20", label: "20 min" },
    { value: "25", label: "25 min" },
    { value: "30", label: "30 min" },
  ];

  return (
    <main className="sleep-body-container">
      <div>
        <div>
          <h2>Meditation</h2>
          <label>
            <span>On/Off</span>
            <ReactSwitch
              onChange={handleMeditationToggle}
              checked={isMeditationOn}
              onColor="#f2ac3c"
            />
          </label>
          {isMeditationOn && (
            <div>
              <label>
                <span>Melody</span>
                <select
                  value={meditationMelody}
                  onChange={handleMeditationMelodyChange}
                >
                  {meditationMelodyOptions.map((melody) => (
                    <option key={melody.value} value={melody.value}>
                      {melody.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Duration</span>
                <select
                  value={meditationDuration}
                  onChange={handleMeditationDurationChange}
                >
                  {mediationDurationOptions.map((time) => (
                    <option key={time.value} value={time.value}>
                      {time.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}
        </div>
        <div className="alarm-container">
          <h2>Alarm</h2>
          <label>
            <span>On/Off</span>
            <ReactSwitch
              onChange={handleAlarmToggle}
              checked={isAlarmOn}
              onColor="#f2ac3c"
            />
          </label>
          {isAlarmOn && (
            <div>
              <label>
                <span>Sound</span>
                <select value={alarmMelody} onChange={handleAlarmMelodyChange}>
                  {alarmMelodyOptions.map((melody) => (
                    <option key={melody.value} value={melody.value}>
                      {melody.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Time</span>
                <input
                  type="time"
                  value={alarmTime}
                  onChange={handleAlarmTimeChange}
                />
              </label>
            </div>
          )}
        </div>
        <div className="more-settings-container">
          <h2>More Settings</h2>
          <label>
            <span>Airplane Mode</span>
            <ReactSwitch
              onChange={handleAirplaneModeToggle}
              checked={airplaneMode}
              onColor="#f2ac3c"
            />
          </label>
        </div>
      </div>

      {showBlurBackground && <div className="blur-background" />}

      {showPopup && (
        <div className="countdown-popup">
          <p>{countdown}</p>
          <button className="cancel-button" onClick={handleCancelClick}>
            Click to cancel
          </button>
        </div>
      )}

      <div>
        <button className="sleep-button" onClick={handleButtonClick}>
          SLEEP NOW
        </button>
      </div>
    </main>
  );
}

export default SleepBody;
