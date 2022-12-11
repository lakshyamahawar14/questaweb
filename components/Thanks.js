import { useRouter } from 'next/router'

export default function Start() {
  const router = useRouter()
  return (
    <>
        <p className='text-5xl font-black text-center p-4 select-none leading-normal mt-8'>Your Download will start after a few seconds automatically... <br/> Thanks for using our website </p>
        <p className='text-2xl text-center'>Click Here to create a new Qustion Paper</p>
        <div className='flex justify-center mt-4 mb-12'>
            <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full' onClick={() => router.push("/create")}>
                Create
            </button>
        </div>
    </>
  )
}