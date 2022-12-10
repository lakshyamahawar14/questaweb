import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Start() {
  const router = useRouter()
  return (
    <>
        <p className='text-2xl text-center p-4 select-none leading-normal mt-8'>Click the button below to make a question paper for <span className='text-blue-800'>FREE</span></p>
        <div className='flex justify-center mt-4 mb-12'>
            <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full' onClick={() => router.push("/create")}>
                Create
            </button>
        </div>
    </>
  )
}