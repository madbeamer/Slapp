import "./MorningBody.css";
import { useNavigate } from "react-router-dom";

function MorningInputBody() {
  const navigate = useNavigate();

  const handleModeClick = (path: string) => {
    navigate(path);
  };

  return (
    <main>
      <div className="morning-body-container">
        <article className="top-buttons">
          <button
            className="mode-button"
            onClick={() => handleModeClick("/evening")}
          >
            MODE: Day
          </button>
          <button className="submit-button">Submit</button>
        </article>
        <article className="cardList">
          <CardWithSlider
            inputTitle="How was your sleep?"
            sliderList={["dead", "bad", "meh", "ok", "nice"]}
          />
          <CardWithSlider
            inputTitle="How often are your wakeups?"
            sliderList={["0", "1", "2", "3", ">3"]}
          />
          <CardWithSlider
            inputTitle="How often did you go to the bathroom?"
            sliderList={["0h", "1h", "2h", ">3h", "didn't"]}
          />
        </article>
      </div>
    </main>
  );

  // helper functions:

  function handleHabitClick(e: React.MouseEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains("clicked"))
      e.target.classList.remove("clicked");
    else e.target.classList.add("clicked");
  }

  function CardWithSlider(props: {
    inputTitle: string;
    sliderList: Array<string>;
  }) {
    return (
      <form className="card">
        <label htmlFor="damnInput">{props.inputTitle}</label>
        <br />
        <input type="range" id="sleepInput" min={1} max={5} step={1} />
        <div className="sliderList">
          {props.sliderList.map((key, value) => {
            return <span key={key}>{value}</span>;
          })}
        </div>
      </form>
    );
  }
}

export default MorningInputBody;
