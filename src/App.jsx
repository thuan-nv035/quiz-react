import { useMemo, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./app.css"
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  const data = [
    {
      id: 1,
      question: "What is the person (or office) who has the powers to enforce the Data Protection Act called?",
      answers: [
        {
          text: "Information Commissioner",
          correct: true
        },
        {
          text: "Data Controller",
          correct: false
        },
        {
          text: "Data Subject",
          correct: false
        },
        {
          text: "Data Subject",
          correct: false
        },
      ]
    },
    {
      id: 2,
      question: "How many principles of the Data Protection Act are there? (According to GDPR)",
      answers: [
        {
          text: "5",
          correct: false
        },
        {
          text: "6",
          correct: false
        },
        {
          text: "7",
          correct: true
        },
        {
          text: "8",
          correct: false
        },
      ]
    },
    {
      id: 1,
      question: "Who are data users?",
      answers: [
        {
          text: "Data users file, store the data, e.g., Doctors and Bankers.",
          correct: true
        },
        {
          text: "Data users use the data in databases.",
          correct: false
        },
        {
          text: "Data users use data for their own advantage breaking the Law.",
          correct: false
        },
        {
          text: "All of the above.",
          correct: false
        },
      ]
    },
  ]

  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"}
    ].reverse(),
  []) 

  useEffect(()=>{
    questionNumber > 1 && setEarned(moneyPyramid.find((m)=> m.id === questionNumber-1).amount)
  }, [moneyPyramid ,questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ? (
        <h1 className = "eadText">You earned: {earned}</h1>) : (
          <>
            <div className="top">
            <div className="timer"><Timer/></div>
            </div>
              <div className="bottom">
                <Trivia
                data = {data} 
                setStop = {setStop}
                questionNumber = {questionNumber}
                setQuestionNumber = {setQuestionNumber}
                />
              </div>
          </>
          )}
      </div>
      <div className="pyramid">
        <div className="moneyList">
          {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
