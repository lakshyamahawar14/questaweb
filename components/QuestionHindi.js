import { useState } from "react";

export default function Question(props) {
  const numQuestion = props.numQuestion;
  const questionID = `question${numQuestion}`;
  const showQuestionID = `showquestion${numQuestion}`;

  const [hindiQuestion, setHindiQuestion] = useState("");
  const spacesID = `space${numQuestion}`

  const handleClick = () => {
    document.getElementById(showQuestionID).innerText =
      `Q${numQuestion}) ` +
      document.getElementById(questionID).value;
    const el = document.getElementById(showQuestionID);
    el.classList.add("pad");
    el.classList.add("abel");
  };

  async function translate(){
    
  }

  const handleChange = () => {
    setHindiQuestion(document.getElementById(questionID).value);
  }
  
  return (
    <>
      <div class="flex m-4 justify-between w-full max-w-xl">
        <label
          for={questionID}
          class="text-xl text-center select-none leading-normal"
        >
          Q{numQuestion})
        </label>
        <textarea
          type="text"
          id={questionID}
          name={questionID}
          class="questionHindi border-2 border-blue-800 w-3/4 max-w-xl ml-2 p-2 min-h-sm"
          placeholder="Enter Question..."
          onMouseLeave={translate}
          onChange={handleChange}
          value={hindiQuestion}
          required
        ></textarea>
        <button
          class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 mx-2 rounded-full h-full"
          onClick={handleClick}
          
        >
          जोड़ें 
        </button>
      </div>
      <div className="flex m-4 justify-start w-full max-w-xl">
            <label for="spaces">प्रश्न {numQuestion}) के बाद खाली जगह (4  = 4 लाइन्स)</label>
            <input id={spacesID} name="spaces" className="linespaces border-2 border-blue-800 w-3/4 max-w-xl ml-2 p-2 max-w-[50px] mx-2" defaultValue={4} maxLength={2}></input>
        </div>
      <div
        id={showQuestionID}
        class="showquestions my-4 mx-2 text-[1rem]"
      ></div>
    </>
  );
}
