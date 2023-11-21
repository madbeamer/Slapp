import "./StatisticsBody.css";
import { useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

function StatisticsBody() {
  const [showMoreBadHabits, setShowMoreBadHabits] = useState(false);
  const [showMoreGoodHabits, setShowMoreGoodHabits] = useState(false);

  const badSleepHabits: [string, boolean][] = [
    ["Using electronic devices before bed", true],
    ["Consuming caffeine late in the day", false],
    ["Irregular sleep schedule", true],
    ["Stressful activities before bedtime", false],
    ["Poor sleeping environment", false],
  ];

  const goodSleepHabits: [string, boolean][] = [
    ["Establishing a bedtime routine", false],
    ["Avoiding large meals before bedtime", true],
    ["Creating a comfortable sleep environment", true],
    ["Regular exercise (but not too close to bedtime)", false],
    ["Limiting exposure to screens before bed", true],
  ];

  const toggleShowMoreBadHabits = () => {
    setShowMoreBadHabits(!showMoreBadHabits);
  };

  const toggleShowMoreGoodHabits = () => {
    setShowMoreGoodHabits(!showMoreGoodHabits);
  };

  const renderHabits = (habits: [string, boolean][], showMore: boolean) => {
    return habits.slice(0, showMore ? undefined : 3).map((habit, index) => (
      <div className="habit-row" key={index}>
        <div className="habit">{habit[0]}</div>
        {habit[1] && <FaArrowTrendUp size={24} className="trend-up-icon" />}
        {!habit[1] && (
          <FaArrowTrendDown size={24} className="trend-down-icon" />
        )}
      </div>
    ));
  };

  return (
    <main className="statistics-body-container">
      <div className="habits-category">
        <div className="habits-grid">
          <div className="header-row">
            <div>Your habits for bad sleep</div>
            <div>Trend</div>
          </div>
          {renderHabits(badSleepHabits, showMoreBadHabits)}
        </div>
        {badSleepHabits.length > 3 && (
          <button className="more-button" onClick={toggleShowMoreBadHabits}>
            {showMoreBadHabits ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      <div className="habits-category">
        <div className="header-row">
          <div>Your habits for good sleep</div>
          <div>Trend</div>
        </div>
        <div className="habits-grid">
          {renderHabits(goodSleepHabits, showMoreGoodHabits)}
        </div>
        {goodSleepHabits.length > 3 && (
          <button className="more-button" onClick={toggleShowMoreGoodHabits}>
            {showMoreGoodHabits ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </main>
  );
}

export default StatisticsBody;
