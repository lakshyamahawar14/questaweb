import Script from "next/script";
import { useState } from "react";

export default function Question(props) {
  const numQuestion = props.numQuestion;
  const questionID = `question${numQuestion}`;
  const showQuestionID = `showquestion${numQuestion}`;

  const [hindiQuestion, setHindiQuestion] = useState("");
  const [showHindiQuestion, setShowHindiQuestion] = useState("");
  const spacesID = `space${numQuestion}`

  const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

  const handleClick = () => {
    const el = document.getElementById(showQuestionID);
    el.classList.add("pad");
    el.classList.add("abel");
    translate(document.getElementById(questionID).value);
  };

  const handleChange = () => {
    setHindiQuestion(document.getElementById(questionID).value);
    
  }

  const translate = (engtext) => {
    let fromLang = 'en';
    let toLang = 'hi';
    let text = engtext;

    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    url += '&q=' + encodeURI(text);
    url += `&source=${fromLang}`;
    url += `&target=${toLang}`;


    fetch(url, { 
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then((response) => {
      // setHindiQuestion(response.data.translations[0].translatedText)
      setShowHindiQuestion(`प्रश्न${numQuestion}) ${response.data.translations[0].translatedText}`)
      console.log("response from google: ", response.data.translations[0].translatedText);
    })
    .catch(error => {
      console.log("There was an error with the translation request: ", error);
    });
  }
  
  return (
    <>
      <Script src="/scripts/jsapi.js"></Script>
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
        className="showquestions my-4 mx-2 text-[1rem]"
      >
        {
          showHindiQuestion
        }
      </div>
    </>
  );
}
