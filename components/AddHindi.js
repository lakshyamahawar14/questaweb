import Script from "next/script";
import { useState } from "react";
import QuestionHindi from "./QuestionHindi";

export default function Add() {
  const [quests, setQuests] = useState([]);
  const [numQuestion, setNumQuestion] = useState(1);

  const generateQuestion = () => {
    setQuests([...quests, numQuestion]);
    setNumQuestion(numQuestion + 1);
  };

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
        integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></Script>
      <p className="text-2xl text-center p-4 select-none leading-normal mt-8">
      अपने कीबोर्ड की भाषा को हिंग्लिश में सेट करें और अंग्रेजी में टाइप करें। वो अपने आप हिंदी में बदल जाएगा (जैसे vikalp = विकल्प)
      </p>
      <div className="flex justify-center mt-4 mb-12">
        <button
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full h-full"
          onClick={generateQuestion}
        >
          प्रश्न जोड़ें
        </button>
      </div>
      <div
        id="questions"
        className="flex border-2 border-blue-800 flex-col m-4 p-4 justify-center"
      >
        {quests.map((quest, id) => (
          <QuestionHindi numQuestion={quest} key={id} />
        ))}
      </div>
    </>
  );
}
