import { useRouter } from 'next/router'

export default function Generate() {
  const router = useRouter()

  const generatePDF = () => {
    const elements = document.getElementsByClassName('showquestions');
    const paperheader = document.getElementById('paper-header');
    var show = document.createElement('div');
    show.setAttribute("id", "show");
    show.classList.add("Paper")
    const img = document.createElement("img"); 
    img.src = "/static/img/logo.PNG";
    img.style.width = '75px';
    var watermark = document.createElement('div');
    watermark.setAttribute("id", "watermark");
    watermark.appendChild(img);
    watermark.style.display = 'flex';
    watermark.style.justifyContent = 'center';
    show.innerHTML += watermark.innerHTML;
    show.innerHTML += paperheader.innerHTML;
    var i = 0;
    for(i; i<elements.length; i++){
      var linepsaces = document.getElementsByClassName('linespaces')[i].value;
      show.innerHTML += elements[i].innerHTML;
      var j = 0;
      for(j; j<linepsaces; j++){
        show.innerHTML += `</br>`;
      }
    }

    const delayInMilliseconds = 2000; 

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