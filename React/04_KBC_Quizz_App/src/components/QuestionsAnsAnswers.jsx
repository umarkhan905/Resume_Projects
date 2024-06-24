import { useState, useEffect } from "react";
import { IoMdRepeat } from "react-icons/io";
import useSound from "use-sound";
import play from "../sounds/play.MP3";
import correct from "../sounds/correct.MP3";
import wrong from "../sounds/wrong.mp3";
import hb from "../sounds/hb.MP3";

const QuestionsAnsAnswers = ({
  setQuestionNo,
  setStop,
  data,
  questionNo,
  setIsTrue,
}) => {
  const [lifeLine, setLifeLine] = useState({
    fifty: false,
    change_ques: false,
  });
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [answers, setAnswers] = useState(null);
  const [timer, setTimer] = useState(30);
  const [stopTimer, setStopTimer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [letsPlay] = useSound(play);
  const [letsWrong] = useSound(wrong);
  const [letsCorrect] = useSound(correct);
  const [letsHb] = useSound(hb);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = (ans) => {
    setStopTimer(true);
    setSelectedAnswer(ans);
    setClassName("answer active");
    letsHb();
    setTimeout(() => {
      setClassName(ans.correct ? "answer correct" : "answer wrong");
    }, 3000);
    delay(5000, () => {
      if (ans.correct) {
        letsCorrect();
        if (questionNo === 16) {
          setIsTrue(true);
          setStop(true);
        }
        delay(1000, () => {
          if (isClicked) {
            setIsClicked(false);
            setQuestionNo((prev) => prev + 2);
          } else {
            setQuestionNo((prev) => prev + 1);
          }
          setQuestion(null);
          setStopTimer(false);
          setTimer(30);
        });
      } else {
        letsWrong();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };
  useEffect(() => {
    letsPlay();
  }, [letsPlay]);
  useEffect(() => {
    setQuestion(data[questionNo - 1]);
    setAnswers(data[questionNo - 1].answers);
  }, [setQuestion, data, questionNo, setAnswers]);
  useEffect(() => {
    if (stopTimer) return setTimer(timer);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setTimer, stopTimer, timer]);
  useEffect(() => {
    if (timer === 0) return setStop(true);
  }, [setStop, timer]);
  return (
    <div className="ques_ans_container">
      <div className="top">
        <div className="timer">{timer}</div>
        <div className="start_quit" onClick={() => setStop(true)}>
          Quit
        </div>
        <div className="life_lines">
          <button
            disabled={lifeLine.fifty}
            className="fifty"
            onClick={() => {
              setLifeLine({ ...lifeLine, fifty: true });
              setStopTimer(true);
              // for fifty fifty life line
              const incorrectOptions = answers.filter((ans) => {
                return ans.correct !== true;
              });
              const correctOption = answers.filter((ans) => {
                return ans.correct === true;
              });
              const randomNumber = Math.floor(Math.random() * 3);
              const randomSelction = incorrectOptions[randomNumber];
              setTimeout(() => {
                setAnswers([randomSelction, ...correctOption]);
                setStopTimer(false);
              }, 3000);
            }}
          >
            50
          </button>
          <button
            disabled={lifeLine.change_ques}
            className="change_question"
            onClick={() => {
              setLifeLine({ ...lifeLine, change_ques: true });
              setStopTimer(true);
              setIsClicked(true);
              delay(3000, () => {
                setQuestion(data[questionNo]);
                setAnswers(data[questionNo].answers);
                setStopTimer(false);
                // setQuestionNo((prev) => prev + 1);
              });
            }}
          >
            <IoMdRepeat />
          </button>
        </div>
      </div>
      <div className="bottom">
        <div className="question">{question?.question}</div>
        <div className="answers">
          {answers?.map((ans) => {
            return (
              <div
                className={selectedAnswer === ans ? className : "answer"}
                onClick={() => handleClick(ans)}
              >
                {ans.option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionsAnsAnswers;
