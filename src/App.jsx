import { useEffect, useState } from "react";
import restartIcon from "/undo-arrow.svg";
import moreIcon from "/more.svg";
import playIcon from "/play.svg";
import pauseIcon from "/pause.svg";
import clousIcon from "/cancel.svg";
import Button from "./components/UI/Button/Button";
import MenuMore from "./components/MenuMore/MenuMore";
import Redactor from "./components/Redactor/Redactor";
function App() {
  const [start, setStart] = useState(false);
  const [rotate, setRotate] = useState(0);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [openMore, setOpenMire] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [fontFamili, setFontFamili] = useState("Space Mono");
  const [fontColor, setFontColor] = useState("#222");
  const [openRedactor, setOpenRedactor] = useState(false);
  console.log(fontColor);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setRotate((prevRotate) => prevRotate + 0.006);
        if (milliseconds === 999) {
          if (seconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            setSeconds(0);
          } else {
            setSeconds((prevSeconds) => prevSeconds + 1);
          }
          setMilliseconds(0);
        } else {
          setMilliseconds((prevMilliseconds) => prevMilliseconds + 1);
        }
      }, 1);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning, milliseconds, rotate, seconds]);

  const handleStartPause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
    setRotate(0);
    setIsRunning(false);
    setStart(false);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const fontFamiluItem = [
    { id: 1, font: "Space Mono" },
    { id: 2, font: "Tektur" },
    { id: 3, font: "Times New Roman" },
  ];
  const fontColorItem = [
    {id: 1, color : "rgb(34, 34, 34)"},
    {id: 2, color : "rgb(197 15 207)"},
    {id: 3, color : "rgb(0 141 46)"},
    {id: 4, color : "rgb(18 87 151)"},
  ]
  return (
    <>
      <div className='wrapper'>
        {openRedactor && (
          <Redactor
          fontFamiluItem={fontFamiluItem}
            fontFamili={fontFamili}
            fontColorItem={fontColorItem}
            setFontFamili={setFontFamili}
            setFontColor={setFontColor}
          />
        )}
        <h1
          className='titel'
          style={{ fontFamily: localStorage.getItem("font"), color: localStorage.getItem("color") }}
        >
          AMRAP
        </h1>
        <div className='content'>
          <div
            className='progres-bar'
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <div className='progres-bar__item' style={{background: localStorage.getItem("color")}}></div>
          </div>
          <div className='timer'>
            <div className='timer__content' style={{borderColor: localStorage.getItem("color")}}>
              <p
                style={{ fontFamily: localStorage.getItem("font"), color: localStorage.getItem("color") }}
                className='timer__time'
              >{`${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}${
                isChecked
                  ? `:${milliseconds.toString().slice(0, 2).padStart(2, "0")}`
                  : ""
              }`}</p>
            </div>
          </div>
          <div className='buttons'>
            <div className='more-content'>
              <Button
                buttonFuncion={() => setOpenMire(!openMore)}
                altText={"more"}
                buttonIcon={openMore ? clousIcon : moreIcon}
              />
              <MenuMore
                setOpenRedactor={setOpenRedactor}
                openRedactor={openRedactor}
                openMore={openMore}
                setOpenMire={setOpenMire}
                handleCheckboxChange={handleCheckboxChange}
              />
            </div>
            <Button
              buttonFuncion={handleStartPause}
              altText={"pause"}
              buttonIcon={isRunning ? pauseIcon : playIcon}
            />
            <Button
              buttonFuncion={handleReset}
              altText={"restart"}
              buttonIcon={restartIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
