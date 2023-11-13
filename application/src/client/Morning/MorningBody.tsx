import "./MorningBody.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FaPlus } from "react-icons/fa";

function MorningInputBody() {

  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };
  return (
    <main>
      <div className="morning-body-container">
        <article className="top-buttons">
          <button
            className="mode-button"
            onClick={() => handleButtonClick("/evening")}
          >
            MODE: Day
          </button>
          <button className="submit-button">Submit</button>
        </article>
        <article className="cardList">
          <CardWithSlider inputTitle="How was your sleep?" sliderList={["dead","bad","meh","ok","nice"]}/>
          <CardWithSlider inputTitle="How often are your wakeups?" sliderList={["0","1","2","3",">3"]}/>
          <CardWithSlider inputTitle="How often did you go to the bathroom?" sliderList={["0h","1h","2h",">3h","didn't"]}/>
          <CardWithSelect inputTitle="Select all that apply" selectList={["Depressed","Angry","Hungry","Sad"]}/>
        </article>
      </div>
    </main>
  );


  // helper functions:

  function CardWithSlider(props: {inputTitle : string, sliderList: Array<string>}){
    return (
      <form className="card">
        <label htmlFor="damnInput">{props.inputTitle}</label><br />
        <input type="range" id="sleepInput" min={1} max={5} step={1}/>
        <div className="sliderList">
          <span>{props.sliderList[0]}</span>
          <span>{props.sliderList[1]}</span>
          <span>{props.sliderList[2]}</span>
          <span>{props.sliderList[3]}</span>
          <span>{props.sliderList[4]}</span>
        </div>
      </form>
    )
  }

  function CardWithSelect(props: {inputTitle : string, selectList : Array<string>}){
    return (
      <form className="card">
        <label htmlFor="selectInput">{props.inputTitle}</label>
        <div className="button-grid card">
          {props.selectList.map((label) => (
            <button key={label} className="habit-button">
              {label}
            </button>
          ))}
        </div>
      </form>
    )
  }
}

export default MorningInputBody;
