import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function UserInfo() {
  const router = useRouter()
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  return (
    <>
    <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <p className='text-5xl font-black text-center p-4 select-none leading-normal mt-8'>Enter Your Information</p>
        <label for="name" className='text-xl text-center select-none leading-normal'>Name: </label>
        <input type="text" id="name" name="name" className='border-2 border-blue-800 rounded-full w-3/4 max-w-xl text-center p-2' placeholder="Enter Your Name..." required/>
        <label for="schoolname" className='text-xl text-center select-none leading-normal p-2'>School Name: </label>
        <input type="text" id="schoolname" name="schoolname" className='border-2 border-blue-800 rounded-full w-3/4 max-w-xl text-center p-2' placeholder="Enter School Name..." required/>
        <label for="examname" className='text-xl text-center select-none leading-normal p-2'>Exam Name: </label>
        <input type="text" id="examname" name="examname" className='border-2 border-blue-800 rounded-full w-3/4 max-w-xl text-center p-2' placeholder="Exam Name..." required/>
        <label for="class" className='text-xl text-center select-none leading-normal p-2'>Class Number: </label>
        <input type="text" id="class" name="class" className='border-2 border-blue-800 rounded-full w-3/4 max-w-xl text-center p-2' placeholder="Enter Class Number..." required/>
        <label for="subject" className='text-xl text-center select-none leading-normal p-2'>Subject: </label>
        <input type="text" id="subject" name="subject" className='border-2 border-blue-800 rounded-full w-3/4 max-w-xl text-center p-2' placeholder="Enter Subject Name..." required/>
        <div className='w-3/4 max-w-xl text-center mt-8 mb-8 flex justify-between'>
        <button type="submit" className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full' onClick={() => router.push("/paper")}>
                Proceed
        </button>
        <div className='mt-4'>
          <input type="checkbox" id="language" name="language" value="Hindi"/>
          <label for="language" className="px-2">Check this box if Paper is in Hindi</label>
        </div>
        </div>
    </form>
    </>
  )
}
