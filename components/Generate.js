import { useRouter } from 'next/router'

export default function Generate() {
  const router = useRouter()

  const generatePDF = () => {
    const elements = document.getElementsByClassName('showquestions');
    const paperheader = document.getElementById('paper-header');
    var show = document.createElement('div');
    show.setAttribute("id", "show");
    show.classList.add("Paper")
    // var watermark = document.createElement('div');
    // watermark.setAttribute("id", "watermark");
    // watermark.innerText = 'made by Questa';
    // show.innerHTML += watermark.innerHTML;
    show.innerHTML += paperheader.innerHTML;
    var i = 0;
    for(i; i<elements.length; i++){
      show.innerHTML += elements[i].innerHTML + `<br/><br/>`;
    }
    

    var delayInMilliseconds = 1500; 

    setTimeout(function() {
      html2pdf().from(show).save();
    }, delayInMilliseconds);
    
  }

  return (
    <>
        <div className='flex justify-center mt-4 mb-12'>
            <button id='download-button' className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full h-full' onClick={() => {generatePDF(); router.push("/download")}}>
                Download PDF
            </button>
        </div>
    </>
  )
}