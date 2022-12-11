import Script from 'next/script'

export default function AddHindi() {
  var numQuestion = 1;

  const generateQuestion = () => {
    document.getElementById('questions').innerHTML += `<div class='flex m-4 justify-between w-full max-w-xl'><label for="question${numQuestion}" class='text-xl text-center select-none leading-normal'>Q${numQuestion}) </label><textarea type="text" id="question${numQuestion}" name="question${numQuestion}" class='questionHindi border-2 border-blue-800 w-3/4 max-w-xl ml-2 p-2 min-h-sm' placeholder="Enter Question..." required></textarea><button class='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 mx-2 rounded-full h-full' onclick="document.getElementById('showquestion${numQuestion}').innerText = 'Q${numQuestion}) '+document.getElementById('question${numQuestion}').value; el = document.getElementById('showquestion${numQuestion}'); el.classList.add('pad'); el.classList.add('abel')">Add</button></div><div id="showquestion${numQuestion}" class="showquestions my-4 mx-2"></div>`;
    numQuestion += 1;
  }
  
  return (
    <>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></Script>
        <p className='text-2xl text-center p-4 select-none leading-normal mt-8'>नया सवाल जोड़ने के लिए नीचे के बटन को दबाइए | सवाल में अंग्रेजी में टाइप कीजिए | वो स्वतः हिंदी में परिवर्तित हो जाएगा | जैसे [vikalp = विकल्प]</p>
        <div className='flex justify-center mt-4 mb-12'>
            <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full h-full' onClick={generateQuestion}>
                Add Question
            </button>
            
        </div>
        <div id="questions" className='flex border-2 border-blue-800 flex-col m-4 p-4 justify-center'>

        </div>

    </>
  )
}