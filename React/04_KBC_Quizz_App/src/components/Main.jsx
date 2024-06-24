import { useState, useEffect } from "react";
import QuestionsAnsAnswers from "./QuestionsAnsAnswers";
import { IoMdRefresh } from "react-icons/io";

const Main = ({ setIntro }) => {
  const [questionNo, setQuestionNo] = useState(1);
  const [stop, setStop] = useState(false);
  const [earnedMoney, setEarnedMoney] = useState("Rs 0");
  const [isTrue, setIsTrue] = useState(false);
  const pyramid = [
    { id: 1, money: "Rs 500" },
    { id: 2, money: "Rs 1,000" },
    { id: 3, money: "Rs 10,000" },
    { id: 4, money: "Rs 50,000" },
    { id: 5, money: "Rs 1,00,000" },
    { id: 6, money: "Rs 5,00,000" },
    { id: 7, money: "Rs 10,00,000" },
    { id: 8, money: "Rs 15,00,000" },
    { id: 9, money: "Rs 20,00,000" },
    { id: 10, money: "Rs 25,00,000" },
    { id: 11, money: "Rs 30,00,000" },
    { id: 12, money: "Rs 40,00,000" },
    { id: 13, money: "Rs 50,00,000" },
    { id: 14, money: "Rs 70,00,000" },
    { id: 15, money: "Rs 85,00,000" },
    { id: 16, money: "Rs 1,00,00,000" },
  ].reverse();
  const data = [
    {
      id: 1,
      question: "MS-Word is an example of",
      answers: [
        { option: "An operating system", correct: false },
        { option: " A processing device", correct: false },
        { option: "Application software", correct: true },
        { option: "An input device", correct: false },
      ],
    },
    {
      id: 2,
      question:
        "Name the Brand that advertises itself with the slogan 'The Vision Of Sound'?",
      answers: [
        { option: "Samsung TVs", correct: true },
        { option: " Thomson TVs", correct: false },
        { option: "Sansui TVs", correct: false },
        { option: "BPL TVs", correct: false },
      ],
    },
    {
      id: 3,
      question: "Fathometer is used to measure",
      answers: [
        { option: "Earthquakes", correct: false },
        { option: "  Rainfall", correct: false },
        { option: "Ocean depth", correct: true },
        { option: "Sound intensity", correct: false },
      ],
    },
    {
      id: 4,
      question: "The first news paper in the world was started by ?",
      answers: [
        { option: "Japan", correct: false },
        { option: "  China", correct: true },
        { option: " USA", correct: false },
        { option: "India", correct: false },
      ],
    },
    {
      id: 5,
      question: "Which is considered as oldest civilization of the world ?",
      answers: [
        { option: "Mesopotamian Civilization", correct: true },
        { option: "Harappan Civilization", correct: false },
        { option: "Chinese Civilization", correct: false },
        { option: "Egyptain Civilization", correct: false },
      ],
    },
    {
      id: 6,
      question: "Helicopter was invented by",
      answers: [
        { option: "Drinker", correct: false },
        { option: "Broquet", correct: true },
        { option: "Copernicus", correct: false },
        { option: "Cockrell", correct: false },
      ],
    },
    {
      id: 7,
      question: "Who had an explosive idea and first patented DYNAMITE?",
      answers: [
        { option: "J. R. Gluber", correct: false },
        { option: " A. Nobel", correct: true },
        { option: "G. Fawks", correct: false },
        { option: "W. Bickford", correct: false },
      ],
    },
    {
      id: 8,
      question: "Holkar Trophy is associated with which sport?",
      answers: [
        { option: "Bridge", correct: true },
        { option: " Hockey", correct: false },
        { option: "Football", correct: false },
        { option: "Badminton", correct: false },
      ],
    },
    {
      id: 9,
      question: "The National Game of Japan is",
      answers: [
        { option: "Tennis", correct: false },
        { option: " Karate", correct: false },
        { option: "Ice Hockey", correct: false },
        { option: "Sumo wrestling", correct: true },
      ],
    },
    {
      id: 10,
      question: "Nuclear sizes are expressed in a unit named",
      answers: [
        { option: "Fermi", correct: true },
        { option: "  Angstrom", correct: false },
        { option: "Newton", correct: false },
        { option: "Tesla", correct: false },
      ],
    },
    {
      id: 11,
      question: "The speed of light will be minimum while passing through",
      answers: [
        { option: "water", correct: false },
        { option: "  vaccum", correct: false },
        { option: "air", correct: false },
        { option: "glass", correct: true },
      ],
    },
    {
      id: 12,
      question: "Which of the following is not a vector quantity?",
      answers: [
        { option: "speed", correct: true },
        { option: "  velocity", correct: false },
        { option: "torque", correct: false },
        { option: "displacement", correct: false },
      ],
    },
    {
      id: 13,
      question: "The Tropic of cancer does not pass through",
      answers: [
        { option: "India", correct: false },
        { option: "Pakistan", correct: true },
        { option: "Bangladesh", correct: false },
        { option: "Myanmar", correct: false },
      ],
    },
    {
      id: 14,
      question:
        "The difference in the duration of day and night increases as one moves from",
      answers: [
        { option: "West to East", correct: false },
        { option: "East and west of the prime meridian", correct: false },
        { option: "Poles to equator", correct: false },
        { option: "Equator to poles", correct: true },
      ],
    },
    {
      id: 15,
      question: "'Bagh', a village in Gwalior is famous for",
      answers: [
        { option: " Sculptures", correct: false },
        { option: "Architecture", correct: false },
        { option: "Cave Painting", correct: true },
        { option: "All of the above", correct: false },
      ],
    },
    {
      id: 16,
      question: "Which country has no cinema theaters?",
      answers: [
        { option: "Saudi Arabia", correct: true },
        { option: "Iraq", correct: false },
        { option: " Pennsylvania", correct: false },
        { option: "None of the above", correct: false },
      ],
    },
    {
      id: 17,
      question: "Who is the author of the book 'Freedom Behind Bars '",
      answers: [
        { option: "Kiran Bedi", correct: true },
        { option: "Jawaharlal Nehru", correct: false },
        { option: "Nelson Mandela", correct: false },
        { option: "Sheikh Abdullah", correct: false },
      ],
    },
    {
      id: 18,
      question: "October 24 is observed as",
      answers: [
        { option: "World Vegetarian Day", correct: false },
        { option: "United Nations Day", correct: true },
        { option: " World Immunization Day", correct: false },
        { option: "World Environment Day", correct: false },
      ],
    },
  ];
  useEffect(() => {
    if (questionNo > 1 && questionNo === 16) {
      if (isTrue) {
        setEarnedMoney("Rs 1,00,00,000");
      } else {
        setEarnedMoney("Rs 85,00,000");
      }
    }
    questionNo > 1 &&
      setEarnedMoney(pyramid.find((m) => questionNo - 1 === m.id).money);
  }, [pyramid, setEarnedMoney, questionNo, isTrue]);
  return (
    <div>
      <div className="main">
        <div className="questions">
          {stop ? (
            <>
              <div className="endText">
                <h1>You Earn: {earnedMoney}</h1>
                <button onClick={() => setIntro(false)}>
                  <IoMdRefresh />
                </button>
              </div>
            </>
          ) : (
            <QuestionsAnsAnswers
              setQuestionNo={setQuestionNo}
              setStop={setStop}
              data={data}
              questionNo={questionNo}
              setIsTrue={setIsTrue}
            />
          )}
        </div>
        <div className="pyramid">
          <ul className="money_list">
            {pyramid.map((elem) => {
              return (
                <li
                  className={
                    questionNo === elem.id
                      ? "money_list_item active"
                      : "money_list_item "
                  }
                >
                  <span className="money_list_item_no">{elem.id}</span>
                  <span className="money_list_item_money">{elem.money}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
