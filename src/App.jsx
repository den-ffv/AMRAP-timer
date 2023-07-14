import { useEffect, useState } from "react";
import restartIcon from "/undo-arrow.svg";
import moreIcon from "/more.svg";
import playIcon from "/play.svg";
import pauseIcon from "/pause.svg";
import clousIcon from "/cancel.svg";
import Button from "./components/UI/Button/Button";
import MenuMore from "./components/MenuMore/MenuMore";
function App() {
  const [start, setStart] = useState(false);
  const [rotate, setRotate] = useState(0);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [openMore, setOpenMire] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

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
  const headleSratr = () => {
    setIsRunning(true);
  };
  const headleStop = () => {
    setIsRunning(false);
  };

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
  return (
    <>
      <div className='wrapper'>
        <h1 className='titel'>AMRAP</h1>
        <div className='content'>
          <div
            className='progres-bar'
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <div className='progres-bar__item'></div>
          </div>
          <div className='timer'>
            <div className='timer__content'>
              <p className='timer__time' >{`${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}${
                isChecked
                  ? (`:${milliseconds.toString().slice(0, 2).padStart(2, "0")}`)
                  : ("")
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
                openMore={openMore}
                setOpenMire={setOpenMire}
                handleCheckboxChange={handleCheckboxChange}
              />
            </div>
            {/* <div onClick={() => setStart(!start)}> */}
            <Button
              buttonFuncion={handleStartPause}
              altText={"pause"}
              buttonIcon={isRunning ? pauseIcon : playIcon}
            />

            {/* </div> */}
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
